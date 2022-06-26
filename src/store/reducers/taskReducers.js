import { TASK_ADD, TASK_DONE, TASK_ONGOING } from "../types";
const initialState = {
    tasks: []
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD:
            return { tasks: [...state.tasks, action.payload] }
		case TASK_DONE:
			for (const task of state.tasks) {
				if (task.id === action.payload) {
					task.isDone = true;
					break;
				}
			}
			return { tasks: state.tasks}
		case TASK_ONGOING:
			for (const task of state.tasks) {
				if (task.id === action.payload) {
					task.isDone = false;
					break;
				}
			}
			return { tasks: state.tasks}
        default:
            return state;
    }    
}
 
export default taskReducers;