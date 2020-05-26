export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function setQuestionsAction(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }   
}