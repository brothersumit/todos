import { TASK_ADD } from "../types";
const initialState = {
    tasks: []
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD:
            return { tasks: [...state.tasks, action.payload] }
        default:
            return state;
    }    
}
 
export default taskReducers;