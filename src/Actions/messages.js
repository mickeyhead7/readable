export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

/**
 * @description Updates the message store
 * @param body Message body
 * @param id Unique message id
 * @param level Message level (success, error)
 * @param timeout Timeout before message deactivates
 * @returns {{type: string, body: *, id: *, level: *, timeout: number}}
 */
export const updateMessage = ({ body, id, level, timeout = 5000 }) => {
    return {
        type: UPDATE_MESSAGE,
        body,
        id,
        level,
        timeout,
    };
};
