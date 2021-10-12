import { SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/types";

const initialState = {
    tasks: []
}

const taskReducer = function (state=initialState, action)
{
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        
        case ADD_TASK:
            state.tasks.unshift(action.payload)
            return {
                ...state,
                tasks: state.tasks
            }
        
        case UPDATE_TASK:
            const updatedIndex = state.tasks.findIndex((task)=>{
                return task._id === action.payload._id
            })
            state.tasks[updatedIndex] = action.payload;
            return {
                ...state,
                tasks: state.tasks
            }
        
        case DELETE_TASK:
            const deletedIndex = state.tasks.findIndex((task)=>{
                return task._id === action.payload._id
            })
            if(deletedIndex !== -1) state.tasks.splice(deletedIndex, 1)
            return {
                ...state
            }
        default:
            return state;
    }
}

export default taskReducer;