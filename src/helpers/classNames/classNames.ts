export function classNames(
  cls: string,
  mods: Record<string, boolean | string>,
  additional: string[]
): string {
  const resultClasses = [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([cls]) => cls),
    ...additional,
  ].join(" ");

  return resultClasses;
}
