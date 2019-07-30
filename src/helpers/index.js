export const convertToFt = digit => {
  let inches = digit * 0.393700787;
  const feet = Math.floor(inches / 12);
  inches %= 12;

  return `${feet}ft/${inches.toFixed(2)}in`;
};

export const sortByAsc = (a, b) => (isNaN(a) ? a.localeCompare(b) : a - b);
export const sortByDesc = (a, b) => (isNaN(b) ? b.localeCompare(a) : b - a);

export const sortData = (data, order, sortBy) =>
  data.sort((a, b) =>
    order ? sortByAsc(a[sortBy], b[sortBy]) : sortByDesc(a[sortBy], b[sortBy])
  );

export const filterData = (key, data) => {
  const filData =
    key !== '' ? data.filter(({ gender }) => gender === key) : data;

  return {
    rows: filData,
    total: { chars: filData.length, height: calcSum(filData) }
  };
};

export const calcSum = chars => {
  const sum = chars.reduce(
    (accum, { height }) =>
      isNaN(Number(height)) ? accum : Number(height) + accum,
    0
  );

  return `${sum} cm (${convertToFt(sum)})`;
};

export const getGenders = chars =>
  chars
    .reduce(
      (accum, { gender }) =>
        accum.indexOf(gender) > -1 ? accum : [...accum, gender],
      []
    )
    .map(gender => ({ name: gender, value: gender }));
