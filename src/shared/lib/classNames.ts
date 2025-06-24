export const classNames = (
  className: string,
  mods: Record<string, boolean> = {},
  additional: string[] = []
) => {
  return [
    className,
    ...Object.entries(mods)
      .filter(([className, value]) => !!value)
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(" ");
};
