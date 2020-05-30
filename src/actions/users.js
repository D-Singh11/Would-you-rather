export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export function setUsersAction(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveUserAnswerAction(question) {
    return {
        type: SAVE_USER_ANSWER,
        question
    }
}