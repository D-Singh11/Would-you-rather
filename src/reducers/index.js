import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

 /**
  * @description It is used to create a root reducer by combining all other
  * reducer using combineReducers() function provided by 'redux library.
  * @param {object} allreducers
  * @param {function} rootreducer 
  */
export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
});