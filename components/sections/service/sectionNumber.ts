/** Formats a service page section's numbered eyebrow, e.g. (2, "The solution") -> "02 / The solution". */
export function sectionEyebrow(n: number, label: string) {
  return `${n < 10 ? "0" : ""}${n} / ${label}`;
}
