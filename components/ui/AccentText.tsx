import { Fragment } from "react";

export type AccentSegments = { pre: string; accent: string; post: string };

function withBreaks(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

/** Renders content-dictionary {pre, accent, post} segments; "\n" becomes <br/>. */
export default function AccentText({
  segments,
  accentClass = "accent",
}: {
  segments: AccentSegments;
  accentClass?: string;
}) {
  return (
    <>
      {withBreaks(segments.pre)}
      <span className={accentClass}>{segments.accent}</span>
      {withBreaks(segments.post)}
    </>
  );
}
