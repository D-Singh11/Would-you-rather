export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

/**
* @description Action creator used to craete action for RECEIVE_USERS event
* @param {object} users
* @returns {object} action 
*/
export function setUsersAction(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}


/**
* @description Action creator used to craete action for SAVE_USER_ANSWER event.
* It is used to add the new answer to the user's information/details.
* @param {object} question
* @returns {object} action 
*/
export function saveUserAnswerAction(question) {
    return {
        type: SAVE_USER_ANSWER,
        question
    };
}