import { setUsersAction } from './users';
import { setQuestionsAction } from './questions';
import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';


/**
* @description Thunked Action creator used to make asynchornous API 
* call to get initial data from database needed to set initial state of redux store.
* Dispatch actions used to upadte users and questions state in store.
* @returns {function}
*/
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(data => {
            const { users, questions } = data;
            dispatch(setUsersAction(users));
            dispatch(setQuestionsAction(questions));
            dispatch(hideLoading());
        });
    };
}