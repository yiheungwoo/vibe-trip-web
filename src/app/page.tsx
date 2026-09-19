import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/i18n/config";

/** Fallback only: middleware normally redirects "/" to the visitor's locale before this runs. */
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
