export const SET_SORT = 'SET_SORT';

/**
 * @description Sets the sort in the store
 * @param field Sort field
 * @param direction Sort direction
 * @returns {{type: string, field: *, direction: *}}
 */
export const setSort = (field, direction) => {
    return {
        type: SET_SORT,
        field,
        direction,
    }
};
