import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { setUserDetails } from "./userActions";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// const URL = "http://localhost:5000";
const URL = "";

export const registerUser = (userData, history) =>
    dispatch => {
        axios.post(`${URL}/api/auth/register`, userData)
            .then(res => {
                // console.log(res.data);
                history.push('login');
            })
            .catch(err => {
                // console.log(err.response.data);
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            });

    };


export const loginUser = (userData, history) =>
    dispatch => {
        axios.post(`${URL}/api/auth/login`, userData)
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
                history.push('app/dashboard');
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            });
    }


export const setCurrentUser = userData => {
    return {
        type: SET_CURRENT_USER,
        payload: userData
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('USER');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};