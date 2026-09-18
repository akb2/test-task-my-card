export const classes = (...classNames: (string | undefined | false | null)[]) =>
  classNames.filter(Boolean).join(" ");
