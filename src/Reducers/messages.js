import { UPDATE_MESSAGE } from '../Actions/messages';

/**
 * @description Initial sort state
 * @type {{body: null, id: null, level: null, timeout: number}}
 */
const initialState = {
    body: null,
    id: null,
    level: null,
    timeout: 5000,
};

/**
 * @description Message reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const messages = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                body: action.body,
                id: action.id,
                level: action.level,
                timeout: action.timeout,
            };
        default:
            return state;
    }
};

export default messages;
