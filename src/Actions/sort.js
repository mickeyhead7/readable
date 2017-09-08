export const SET_SORT = 'SET_SORT';

export function setSort (field, direction) {
    return {
        type: SET_SORT,
        field,
        direction,
    }
}
