import moment from 'moment';

/**
 * @description formats a given date timestamp
 * @param timestamp Date timestamp to be formatted
 * @param format Required date format output
 * @returns {string}
 */
export const format = (timestamp, format) => {
    return moment(timestamp).format(format);
};

/**
 * @description Gets the current unix timestamp
 * @returns {number} Unix timestamp
 */
export const getUnixTimestamp = () => {
    return moment().unix();
};
