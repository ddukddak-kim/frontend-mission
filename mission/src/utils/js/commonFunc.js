const numberWithComma = (number) => {
  if (!number) return '';
  const res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return res;
};

const a = (number) => {
  // temp
  if (!number) return '';
  const res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return res;
};

export { numberWithComma, a };
