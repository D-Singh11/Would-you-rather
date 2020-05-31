import { saveAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { saveUserAnswerAction } from './users';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

/**
* @description Action creator used to craete action for RECEIVE_QUESTIONS event
* @param {object} questions
* @returns {object} action 
*/
export function setQuestionsAction(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

/**
* @description Action creator used to craete action for SAVE_ANSWER event
* @param {object} question
* @returns {object} action 
*/
function saveAnswerAction(question) {
    return {
        type: SAVE_ANSWER,
        question
    };
}


/**
* @description Action creator used to craete action for ADD_QUESTION event
* @param {object} question
* @returns {object} action 
*/
function addQuestionAction(question) {
    return {
        type: ADD_QUESTION,
        question
    };
}


/**
* @description Thunked Action creator used to make asynchornous API 
* call to save answer. Dispatches actions used to saveAnswerAction() 
* and saveUserAnswerAction().
* @param {string} qId
* @param {object} answer
* @returns {function}
*/
export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const authedUser = getState().authedUser;

        dispatch(saveAnswerAction({ authedUser, qid, answer }));
        dispatch(saveUserAnswerAction({ authedUser, qid, answer }));
        console.log("State", getState());
        return saveAnswer({
            authedUser,
            qid,
            answer
        }).catch(error => {
            alert('Error - Answer not saved Try again');
        });
    };
}

/**
* @description Thunked action creator used to make asynchornous API 
* call to add/save new question.
*  Dispatches action addQuestionAction() used to add question to redux store.
* @param {object} question
* @returns {function}
*/
export function handleAddQuestion(question) {
    return (dispatch) => {

        dispatch(showLoading());
        return saveQuestion(question).then(savedQuestion => {
            dispatch(addQuestionAction(savedQuestion));
            dispatch(hideLoading());
        });
    };
}