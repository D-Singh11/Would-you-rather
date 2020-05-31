import { RECEIVE_USERS, SAVE_USER_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.question.authedUser]: {
                    ...state[action.question.authedUser],
                    answers: {
                        ...state[action.question.authedUser].answers,
                        [action.question.qid]: action.question.answer
                    }
                }

            }

        default:
            return state;
    }
}