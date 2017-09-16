import { UPDATE_MESSAGE } from '../Actions/messages';

const initialState = {
    body: null,
    id: null,
    level: null,
    timeout: 5000,
};

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
