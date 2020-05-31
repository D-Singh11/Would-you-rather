export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
* @description Action creator used to craete action for SET_AUTHED_USER event
* @param {string} id
* @returns {object} action 
*/
export function setAuthedUserAction(id) {
    return {
        type: SET_AUTHED_USER,
        id
    };
}