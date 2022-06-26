import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../store/actions/taskActions";

const TaskEditInput = (props) => {
	const [text, setText] = useState(props.itemdata.name)
	const dispatch = useDispatch()

	const handleEdit = (e) => {
		setText(e.target.value)
	}

	const handleEditTask = (e) => {
		const formData = {
			taskid: props.itemdata.id,
			taskname: e.target.value
		}
		dispatch(editTask(formData))
	}
	const inputbgcolor = (props.itemdata.isDone) ? 'list-group-item-success' : '';

	return ( 
		<input type="text" className={'form-control border-0 '+inputbgcolor} value={text} onChange={handleEdit} onBlur={handleEditTask}/>
	 );
}
 
export default TaskEditInput;