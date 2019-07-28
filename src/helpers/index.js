export const convertToFt = digit => {
  let inches = (digit * 0.393700787).toFixed(0);
  const feet = Math.floor(inches / 12);
  inches %= 12;
  const convValue = `${feet}ft/${inches}in`;

  return convValue;
};
