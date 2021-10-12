import { SET_USER_DETAILS } from "../actions/types";

const initialState = {
    'first-name': null,
    'last-name': null,
    'email': null,
    'user_id': null
};

function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER_DETAILS:
            return {
                ...state,
                'first-name': action.payload['first-name'],
                'last-name': action.payload['last-name'],
                'email': action.payload['email'],
                'user_id': action.payload['user_id']
            }
        default:
            return state;
    }
}

export default userReducer;