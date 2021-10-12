import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    "isAuthenticated": false,
    "user": {}
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            const user_new = {
                '_id': action.payload.user,
                'display_image': action.payload.display_image
            }
            return {
                ...state,
                'isAuthenticated': action.payload.auth,
                'user': user_new
            };
        default:
            return state;
    }
}

export default authReducer;