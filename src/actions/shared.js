import { setUsersAction } from './users';
import { setQuestionsAction } from './questions';
import { setAuthedUserAction } from './authedUser';
import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

// const AUTHED_ID = null;             // todo: replace with authentication

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(data => {
            const { users, questions } = data;
            dispatch(setUsersAction(users));
            dispatch(setQuestionsAction(questions));
            // dispatch(setAuthedUserAction(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}