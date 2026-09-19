import { Apple, Play } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { STORE_LINKS } from "@/lib/site";

const BUTTON_CLASS =
  "group inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.03] px-6 py-[15px] text-[15px] font-semibold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-vibe-cyan/45 hover:bg-white/[0.07]";

type StoreButtonsProps = {
  dict: Dictionary["store"];
  className?: string;
  id?: string;
  /** When true, always stack vertically (for narrow cards). */
  stacked?: boolean;
};

/** Both app-store download buttons (shared by Hero and Pass sections). */
export default function StoreButtons({ dict, className = "", id, stacked = false }: StoreButtonsProps) {
  return (
    <div
      id={id}
      className={`flex flex-col gap-3 ${stacked ? "" : "sm:flex-row sm:items-center"} ${className}`}
    >
      <a href={STORE_LINKS.appStore} className={BUTTON_CLASS}>
        <Apple className="h-[18px] w-[18px] text-vibe-cyan" aria-hidden />
        {dict.appStore}
      </a>
      <a href={STORE_LINKS.googlePlay} className={BUTTON_CLASS}>
        <Play className="h-[17px] w-[17px] text-vibe-cyan" aria-hidden />
        {dict.googlePlay}
      </a>
    </div>
  );
}
