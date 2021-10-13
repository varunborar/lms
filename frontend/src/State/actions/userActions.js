import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from './authActions';
import { SET_USER_DETAILS, GET_ERRORS } from "./types";

// const URL = "http://localhost:5000";
const URL = "";


export const updateDetails = (updateData) =>
    dispatch => {
        axios.put(`${URL}/api/auth/user/update/${updateData._id}`, updateData)
            .then(async(res) => {
                const { auth, user, accessToken } = res.data;
                const display_image = res.data['display-image'];
                const USER = {
                    "auth": auth,
                    "accessToken": accessToken,
                    "user": user,
                    "display_image": display_image
                };
                localStorage.setItem('USER', JSON.stringify(USER));
                setAuthToken(accessToken);

                const decoded = jwt_decode(accessToken);
                await dispatch(setUserDetails(decoded));

                await dispatch(setCurrentUser(USER));
            }).catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            });
    }

export const setUserDetails = userDetails => {
    return {
        type: SET_USER_DETAILS,
        payload: userDetails
    }
}