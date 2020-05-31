import { SET_AUTHED_USER } from '../actions/authedUser';

/**
* @description Reducer function used by redux store to update the
* authedUser state in store by applying action passed as second parameter.
* @param {string} authedUser
* @returns {object} action
* @returns {string} authedUser 
*/
export default function authedUser(authedUser = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
        default:
            return authedUser;
    }
}