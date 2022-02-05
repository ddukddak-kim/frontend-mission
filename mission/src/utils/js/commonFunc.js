const numberWithComma = (number) => {
  if (!number) return '';
  const res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return res;
};

const temp = () => {
  return '';
};

export { numberWithComma, temp };
