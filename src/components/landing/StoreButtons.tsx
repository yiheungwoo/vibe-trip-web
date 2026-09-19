import { Apple, Play } from "lucide-react";
import { STORE_LINKS } from "@/lib/site";

const BUTTON_CLASS =
  "group inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.03] px-6 py-[15px] text-[15px] font-semibold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-vibe-cyan/45 hover:bg-white/[0.07]";

/** 양대 앱스토어 다운로드 버튼 (Hero / Pass 섹션 공용) */
export default function StoreButtons({
  className = "",
  id,
  stacked = false,
}: {
  className?: string;
  id?: string;
  /** true 이면 모든 브레이크포인트에서 세로 배치(좁은 카드 안에서 사용) */
  stacked?: boolean;
}) {
  return (
    <div
      id={id}
      className={`flex flex-col gap-3 ${stacked ? "" : "sm:flex-row sm:items-center"} ${className}`}
    >
      <a href={STORE_LINKS.appStore} className={BUTTON_CLASS}>
        <Apple className="h-[18px] w-[18px] text-vibe-cyan" aria-hidden />
        App Store에서 다운로드
      </a>
      <a href={STORE_LINKS.googlePlay} className={BUTTON_CLASS}>
        <Play className="h-[17px] w-[17px] text-vibe-cyan" aria-hidden />
        Google Play에서 다운로드
      </a>
    </div>
  );
}
