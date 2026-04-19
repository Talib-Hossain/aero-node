export const pickDefined = <T extends Record<string, unknown>>(values: T) => {
  return Object.fromEntries(
    Object.entries(values).filter(([, value]) => value !== undefined && value !== ''),
  );
};
