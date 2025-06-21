interface Mod {
  [key: string]: boolean;
}

export const classNames = (
  className: string,
  mods: Mod,
  additional: string[]
) => {
  return [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => !!value)
      .map(([className]) => className),
  ].join(" ");
};
