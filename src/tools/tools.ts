const formatNum = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};

export const formatDate = (day: number, month: number, year: number) => {
  return `${year}-${formatNum(month)}-${formatNum(day)}`;
};
