export const RECEIVE_USERS = 'RECEIVE_USERS';

export function setUsersAction(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}