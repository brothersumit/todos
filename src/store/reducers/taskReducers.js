import { TASK_ADD } from "../types";
const initialState = {
    tasks: [
        {id: 1, name: 'Make cold coffe'},
		{id: 2, name: 'Get back to your work table.'}
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