import { RECEIVE_QUESTIONS, SAVE_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case SAVE_ANSWER:
            return {
                ...state,
                [action.question.qid]: {
                    ...state[action.question.qid],
                    [action.question.answer]: {
                        ...state[action.question.qid][action.question.answer],
                        votes: state[action.question.qid][action.question.answer].votes.concat(action.question.authedUser)
                    }
                }

            }
        default:
            return state;
    }
}