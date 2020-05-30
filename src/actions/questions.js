import { saveAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { saveUserAnswerAction } from './users';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function setQuestionsAction(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveAnswerAction(question) {
    return {
        type: SAVE_ANSWER,
        question
    }
}

function addQuestionAction(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

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
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {

        dispatch(showLoading());
        return saveQuestion(question).then(question => {
            dispatch(addQuestionAction(question));
            dispatch(hideLoading());
        })
    }
}