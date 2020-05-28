import { saveAnswer, saveQuestion } from '../utils/api';


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
        return saveQuestion(question).then(question => {
            dispatch(saveQuestion(question));
        })
    }
}