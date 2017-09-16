export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateMessage = ({ body, id, level, timeout }) => {
    return {
        type: UPDATE_MESSAGE,
        body,
        id,
        level,
        timeout,
    };
};
