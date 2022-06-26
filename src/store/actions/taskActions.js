import { TASK_ADD, TASK_DONE, TASK_ONGOING } from "../types";

export const addTask = (formdata) => {
	return function(dispatch){
		//console.log(formdata);
		dispatch({
			type: TASK_ADD,
			payload: formdata
		})
	}
}

export const setTaskDone = (taskId) => {
	return function(dispatch){
		dispatch({
			type: TASK_DONE,
			payload: taskId
		})
	}
}

export const setTaskOngoing = (taskId) => {
	return function(dispatch){
		dispatch({
			type: TASK_ONGOING,
			payload: taskId
		})
	}
}
