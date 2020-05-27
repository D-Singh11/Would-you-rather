import { setUsersAction } from './users';
import { setQuestionsAction } from './questions';
import { setAuthedUserAction } from './authedUser';
import { getInitialData } from '../utils/api';

const AUTHED_ID = 'sarahedo';             // todo: replace with authentication

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(data => {
            const { users, questions } = data;
            dispatch(setUsersAction(users));
            dispatch(setQuestionsAction(questions));
            dispatch(setAuthedUserAction(AUTHED_ID));
        })
    }
}