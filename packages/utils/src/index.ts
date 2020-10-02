export const convertDate = date => {
  const nextDate = new Date(date);

  return nextDate.getTime();
};
