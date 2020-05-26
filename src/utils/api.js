import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from '../utils/_DATA';


export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions])=>{
        return {
            users,
            questions
        };
    })
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveAnswer(info) {
    return _saveQuestionAnswer(info);
}