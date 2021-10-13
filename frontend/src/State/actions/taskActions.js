import axios from 'axios';

import { GET_ERRORS, SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './types';

// const URL = "http://localhost:5000";
const URL = "";

export const getTasks = () => dispatch => {

    axios.get(`${URL}/api/task/`)
        .then(res => {
            const tasks = res.data;
            dispatch(setTasks(tasks));
        })
}

export const setTasks = (tasks) => {
    return {
        'type': SET_TASKS,
        payload: tasks
    };
}

export const addTask = (task) => dispatch => {
    axios.post(`${URL}/api/task/add`, task)
        .then(res => {
            dispatch(add(res.data));
        })
        .catch(
            err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        );
}

export const add = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const updateTask = (task) => dispatch => {
    axios.put(`${URL}/api/task/update/${task._id}`, task)
        .then(res => {
            dispatch(update(task))
        })
        .catch(
            err => {
                // console.log();
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        );
}

export const update = (task) => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}

export const deletetask = (task) => dispatch => {
    axios.delete(`${URL}/task/delete/${task._id}`)
        .then(res => {
            // dispatch(Delete(task))
        })
        .catch(
            err => {
                // console.log();
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        );
}

export const Delete = (task) => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}