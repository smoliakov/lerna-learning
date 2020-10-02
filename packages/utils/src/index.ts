/**
 * Returns converted to timestamp date.
 */
export const convertDate = (date: string): number => {
  const nextDate = new Date(date);

  return nextDate.getTime();
};
