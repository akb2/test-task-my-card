export type EnumValues<E> =
  E extends Record<string, string | number>
    ? E[keyof E] | (E[keyof E] extends infer V extends string | number ? `${V}` : never)
    : E extends string | number
      ? E | `${E}`
      : never;
