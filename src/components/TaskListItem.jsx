import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskDone, setTaskOngoing, editTask, deleteTask } from "../store/actions/taskActions";

const TaskListItem = (props) => {
	const [text, setText] = useState(props.task.name);
	const dispatch = useDispatch();

	const handleCheckbox = (e) => {
		if(e.target.checked){
			const taskId = e.target.value;
			dispatch(setTaskDone(taskId))
		}else{
			const taskId = e.target.value;
			dispatch(setTaskOngoing(taskId))
		}
	}

	const handleEdit = (e) => {
		setText(e.target.value)
	}

	const handleEditTask = (e) => {
		const formData = {
			taskid: props.task.id,
			taskname: e.target.value
		}
		dispatch(editTask(formData))
	}

	const handleDelete = () => {
		dispatch(deleteTask(props.task.id));
	}

	const bgcolor = (props.task.isDone) ? 'list-group-item-success' : '';
	const checked = (props.task.isDone) ? true : false;

	return ( 
		<li className={'list-group-item '+bgcolor} key={props.task.id}>
			<div className="row task-item">
				<div className="col-md-1 text-center">
					<input className="form-check-input list-checkbox" type="checkbox" defaultChecked={checked} value={props.task.id} onChange={handleCheckbox} />
				</div>
				<div className="col-md-9">
					<input type="text" className={'form-control border-0 '+bgcolor} value={text} onChange={handleEdit} onBlur={handleEditTask}/>
				</div>
				<div className="col-md-2 text-end">
					<button type="button" className="btn btn-outline-danger" onClick={handleDelete}><i className="bi bi-trash"></i></button>
				</div>								
			</div>
		</li>
	);
}
 
export default TaskListItem;