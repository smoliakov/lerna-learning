/**
 * Returns converted to timestamp date.
 */
export const convertDate = (date: string): number => {
  const nextDate = new Date(date);

  return nextDate.getTime();
};

/**
 * Returns formatted money.
 */
export const formatTotal = (sum: string): string => sum.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/**
 * Returns formatted sum.
 */
export const formatSum = (x: string): string => {
  const [rubles, pennies] = x.toString().split('.');

  const rublesFormatted = formatTotal(rubles);

  const noPennies = pennies === '00' || !pennies;
  if (noPennies && rublesFormatted === '0') return '-';

  return `${noPennies ? rublesFormatted : [rublesFormatted, pennies].join('.')} ₽`;
};

/**
 * Get phone regexp.
 * @type {RegExp}
 */
const phoneRegExp = new RegExp(/\+?7(\d{3})(\d{3})(\d{2})(\d{2})/);

/**
 * Mask phone number.
 * @param {String} phone - international phone format (+79210000000)
 * @returns {string} masked phone number
 */
export const maskPhone = (phone: string): string => {
  const result = phoneRegExp.exec(phone);

  if (result) {
    return `+7 ${result[1]} *** ${result[3]} ${result[4]}`;
  }

  return phone;
};

/**
 * Format phone with spaces.
 * @param {String} phone
 * @return {string}
 */
export const formatPhone = (phone: string): string => {
  const result = phoneRegExp.exec(phone);

  if (result) {
    return `+7 ${result[1]} ${result[2]} ${result[3]} ${result[4]}`;
  }

  return phone;
};

/**
 * Returns is window flag.
 */
export const isWindow = (): boolean => typeof window !== 'undefined';
