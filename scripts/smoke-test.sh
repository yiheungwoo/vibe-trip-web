#!/usr/bin/env bash
# Smoke test for a running Vibe Trip site (local `wrangler dev`, CI, or production).
#
#   scripts/smoke-test.sh [BASE_URL]        default: http://127.0.0.1:8787
#
# Checks the things that break silently: locale redirects, both language pages, 404 handling,
# security headers and static asset caching. Exits non-zero if any check fails.
set -u

BASE="${1:-http://127.0.0.1:8787}"
BASE="${BASE%/}"
CURL=(curl -s --max-time 20)

pass=0
fail=0

ok()   { pass=$((pass + 1)); printf '  \033[32mPASS\033[0m %s\n' "$1"; }
bad()  { fail=$((fail + 1)); printf '  \033[31mFAIL\033[0m %s\n         %s\n' "$1" "$2"; }

# check "<description>" "<actual>" "<expected substring>"
contains() {
  if [[ "$2" == *"$3"* ]]; then ok "$1"; else bad "$1" "expected to contain: $3 | got: ${2:0:200}"; fi
}
# check "<description>" "<actual>" "<expected exact>"
equals() {
  if [[ "$2" == "$3" ]]; then ok "$1"; else bad "$1" "expected: $3 | got: $2"; fi
}

status()   { "${CURL[@]}" -o /dev/null -w '%{http_code}' "$@"; }
location() { "${CURL[@]}" -o /dev/null -w '%{redirect_url}' "$@"; }
headers()  { "${CURL[@]}" -D - -o /dev/null "$@" | tr -d '\r'; }
header()   { headers "${@:2}" | grep -i "^$1:" | head -1 | cut -d' ' -f2-; }
body()     { "${CURL[@]}" "$@"; }

echo "Smoke test: $BASE"

# --- wait until the site answers (a fresh deployment can take a few seconds to propagate) -------
ready=0
for _ in $(seq 1 30); do
  code=$(status "$BASE/ko" || true)
  if [[ "$code" == "200" ]]; then ready=1; break; fi
  sleep 2
done
if [[ "$ready" -ne 1 ]]; then
  echo "Site did not return 200 for /ko within 60s (last status: ${code:-none})"
  exit 1
fi

echo "Locale redirects (/)"
equals   "no headers -> default locale (307)"    "$(status "$BASE/")" "307"
equals   "no headers -> /ko"                     "$(location "$BASE/")" "$BASE/ko"
equals   "Accept-Language en -> /en"             "$(location -H 'Accept-Language: en-US,en;q=0.9' "$BASE/")" "$BASE/en"
equals   "Accept-Language ko -> /ko"             "$(location -H 'Accept-Language: ko-KR,ko;q=0.9' "$BASE/")" "$BASE/ko"
equals   "unsupported language falls back to ko" "$(location -H 'Accept-Language: fr' "$BASE/")" "$BASE/ko"
equals   "cookie beats Accept-Language"          "$(location -H 'Cookie: NEXT_LOCALE=en' -H 'Accept-Language: ko' "$BASE/")" "$BASE/en"
equals   "invalid cookie is ignored"             "$(location -H 'Cookie: NEXT_LOCALE=xx' -H 'Accept-Language: en' "$BASE/")" "$BASE/en"
equals   "malformed cookie does not break the redirect" "$(status -H 'Cookie: NEXT_LOCALE=%E0%A4%A' "$BASE/")" "307"
equals   "redirect Location is relative (no host echo)" "$(header location "$BASE/")" "/ko"
equals   "query string is preserved"             "$(location "$BASE/?utm_source=test")" "$BASE/ko?utm_source=test"
contains "redirect is never cached"              "$(header cache-control "$BASE/")" "no-store"
contains "redirect varies on language/cookie"    "$(header vary "$BASE/")" "Accept-Language"

echo "Pages"
equals   "/ko returns 200"                       "$(status "$BASE/ko")" "200"
equals   "/en returns 200"                       "$(status "$BASE/en")" "200"
ko_html="$(body "$BASE/ko")"
en_html="$(body "$BASE/en")"
contains "/ko has lang=ko"                       "$ko_html" '<html lang="ko"'
contains "/en has lang=en"                       "$en_html" '<html lang="en"'
contains "/ko has hreflang alternates"           "$ko_html" 'hrefLang="en"'
contains "/en has hreflang alternates"           "$en_html" 'hrefLang="ko"'
contains "/ko is Korean content"                 "$ko_html" '대화 한 번으로'
contains "/en is English content"                "$en_html" 'Plan in one chat'
contains "/ko has og:image (absolute URL)"       "$ko_html" 'property="og:image" content="https://'
contains "/en has og:image"                      "$en_html" 'property="og:image"'
contains "/ko has twitter:image"                 "$ko_html" 'name="twitter:image"'
contains "/ko has FAQ JSON-LD"                   "$ko_html" 'FAQPage'
contains "/ko patent number present"             "$ko_html" '10-2026-0139069'
if [[ "$en_html" == *"Patent Granted"* || "$ko_html" == *"특허 등록"* ]]; then
  bad "no 'patent granted' claims (CLAUDE.md fact sheet)" "found a granted-patent phrase"
else
  ok "no 'patent granted' claims (CLAUDE.md fact sheet)"
fi
loc="$(location "$BASE/ko/")"
if [[ "$loc" == "$BASE/ko" ]]; then ok "/ko/ redirects to /ko"; else bad "/ko/ redirects to /ko" "got: '${loc}'"; fi

echo "Not found"
equals   "unknown path is 404"                   "$(status "$BASE/does-not-exist")" "404"
equals   "unsupported locale is 404"             "$(status "$BASE/fr")" "404"
equals   "unknown nested path is 404"            "$(status "$BASE/ko/nope")" "404"
contains "404 page renders"                      "$(body "$BASE/does-not-exist")" "Page not found"

echo "Security headers (/ko)"
# Header names are case-insensitive (workerd lower-cases some, edge servers capitalize others).
h="$(headers "$BASE/ko" | tr '[:upper:]' '[:lower:]')"
contains "X-Content-Type-Options"                "$h" "x-content-type-options: nosniff"
contains "X-Frame-Options"                       "$h" "x-frame-options: deny"
contains "Referrer-Policy"                       "$h" "referrer-policy: strict-origin-when-cross-origin"
contains "Strict-Transport-Security"             "$h" "strict-transport-security: max-age=31536000"
contains "Permissions-Policy"                    "$h" "permissions-policy:"
contains "CSP: frame-ancestors none"             "$h" "frame-ancestors 'none'"
contains "CSP: object-src none"                  "$h" "object-src 'none'"
contains "CSP: allows Pretendard CDN"            "$h" "https://cdn.jsdelivr.net"

echo "Static assets"
chunk="$(printf '%s' "$ko_html" | grep -o '/_next/static/[^"]*\.js' | head -1)"
if [[ -z "$chunk" ]]; then
  bad "found a Next.js chunk in /ko" "no /_next/static/*.js reference in the HTML"
else
  equals   "JS chunk returns 200"                "$(status "$BASE$chunk")" "200"
  contains "JS chunk is immutable-cached"        "$(header cache-control "$BASE$chunk")" "immutable"
  contains "JS chunk has a JS content type"      "$(header content-type "$BASE$chunk")" "javascript"
fi
equals   "logo returns 200"                      "$(status "$BASE/assets/vibetrip-logo-white-480.png")" "200"
contains "logo is an image"                      "$(header content-type "$BASE/assets/vibetrip-logo-white-480.png")" "image/png"
equals   "OG image returns 200"                  "$(status "$BASE/assets/og-image.jpg")" "200"
contains "OG image is a JPEG"                    "$(header content-type "$BASE/assets/og-image.jpg")" "image/jpeg"
code="$(status "$BASE/_headers")"
if [[ "$code" == "200" ]]; then bad "_headers config file is not publicly served" "GET /_headers returned 200"; else ok "_headers config file is not publicly served"; fi

echo
echo "Result: $pass passed, $fail failed"
[[ "$fail" -eq 0 ]]
