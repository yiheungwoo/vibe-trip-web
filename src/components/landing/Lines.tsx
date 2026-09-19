import { Fragment } from "react";

/**
 * Renders a heading split into lines: the break is only forced from `sm` up,
 * on narrow screens the lines simply flow together.
 */
export default function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && (
            <>
              <br className="hidden sm:block" />{" "}
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  );
}
