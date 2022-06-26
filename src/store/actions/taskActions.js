import { TASK_ADD } from "../types";

export const addTask = (formdata) => {
	return function(dispatch){
		//console.log(formdata);
		dispatch({
			type: TASK_ADD,
			payload: formdata
		})
	}
}