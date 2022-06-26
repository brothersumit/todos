import { TASK_ADD } from "../types";
const initialState = {
    tasks: [
        {id: 1, name: 'Make cold coffe'}
    ]
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD:
            return {
                ...state,
                tasks: action.payload
            }
            break;
    
        default:
            return state;
    }    
}
 
export default taskReducers;