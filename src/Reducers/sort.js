import { SET_SORT } from '../Actions/sort';

const initialState = {
    field: 'timestamp',
    direction: 'desc',
};

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
