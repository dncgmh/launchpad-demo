export const convertToNumber = (hexNumber, precision = 1) => {
  if (!hexNumber) return 0;
  return parseInt(hexNumber, 16) / 10 ** precision;
};
