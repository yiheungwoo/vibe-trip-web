import { LOCALE_COOKIE, isLocale, negotiateLocale } from "../src/i18n/config";

/**
 * Edge entry point. Static assets are served by Cloudflare directly; this Worker only runs for "/"
 * (see `assets.run_worker_first` in wrangler.jsonc) to redirect visitors to their language:
 *   saved language cookie > Accept-Language header > default locale.
 *
 * Headers from public/_headers are NOT applied to Worker-generated responses, so the redirect
 * carries its own minimal set below.
 */

interface Env {
  ASSETS: Fetcher;
}

function readCookie(header: string | null, name: string): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return undefined;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return env.ASSETS.fetch(request);
    }

    const saved = readCookie(request.headers.get("Cookie"), LOCALE_COOKIE);
    const locale = isLocale(saved) ? saved : negotiateLocale(request.headers.get("Accept-Language"));

    url.pathname = `/${locale}`; // query string is preserved
    return new Response(null, {
      status: 307,
      headers: {
        Location: url.toString(),
        // The target depends on the cookie and Accept-Language, so it must never be shared from a cache.
        "Cache-Control": "private, no-store",
        Vary: "Accept-Language, Cookie",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });
  },
} satisfies ExportedHandler<Env>;
