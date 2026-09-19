import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-[720px] ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-vibe-purple/35 bg-vibe-purple/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-vibe-badge">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-[28px] font-bold leading-[1.25] tracking-[-0.025em] text-white sm:text-[36px] lg:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[15px] leading-[1.75] text-white/55 sm:text-[16.5px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
