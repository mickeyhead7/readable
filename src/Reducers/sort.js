import { SET_SORT } from '../Actions/sort';

/**
 * @description Initial sort state
 * @type {{field: string, direction: string}}
 */
const initialState = {
    field: 'timestamp',
    direction: 'desc',
};

/**
 * @description Sort reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const sort = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return {
                field: action.field,
                direction: action.direction,
            };
        default:
            return state;
    }
};

export default sort;
