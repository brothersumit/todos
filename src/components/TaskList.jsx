import { useDispatch, useSelector } from "react-redux";
import notasks from '../images/notasks.png';
import { setTaskDone, setTaskOngoing } from "../store/actions/taskActions";
import TaskEditInput from "./TaskEditInput";

const TaskList = () => {
	const {tasks} = useSelector(state => state.tasks)
	const dispatch = useDispatch()

	const handleCheckbox = (e) => {
		if(e.target.checked){
			const taskId = e.target.value;
			dispatch(setTaskDone(taskId))
		}else{
			const taskId = e.target.value;
			dispatch(setTaskOngoing(taskId))
		}
	}

	//Filter ongoing tasks
	const ongoing_tasks = tasks.filter(task => {
		return task.isDone === false;
	})

	const items = ongoing_tasks.map(task => {
		return (
			<li className="list-group-item" key={task.id}>
				<div className="row task-item">
					<div className="col-md-1 text-center">
						<input className="form-check-input list-checkbox" type="checkbox" value={task.id} onChange={handleCheckbox} />
					</div>
					<div className="col-md-9">	
						<TaskEditInput itemdata={task}/>
					</div>
					<div className="col-md-2 text-end">
						<button type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
					</div>								
				</div>
			</li>
		)
	}).reverse();

	//Filter complted tasks
	const completed_tasks = tasks.filter(task => {
		return task.isDone === true;
	})

	const comleted_items = completed_tasks.map(task => {
		return (
			<li className="list-group-item list-group-item-success" key={task.id}>
				<div className="row task-item">
					<div className="col-md-1 text-start">
						<input className="form-check-input list-checkbox" type="checkbox" checked value={task.id} onChange={handleCheckbox} />
					</div>
					<div className="col-md-9">
						<TaskEditInput itemdata={task}/>		
					</div>
					<div className="col-md-2 text-end">	
						<button type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
					</div>								
				</div>
			</li>
		)
	})


	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 mx-auto">
					{(items.length === 0 && comleted_items.length === 0) ? 
					(
						<li className="list-group-item text-center no-tasks"><img src={notasks} alt="No tasks yet" height={100}/><p className="mt-1">No tasks here yet</p></li>
					) : (
						<div>
							<ul className="list-group">
								{items}
							</ul>
						</div>
					)}
					
					{(comleted_items.length === 0)? '': (
						<div>
							<p className="mt-5">Completed Tasks <i class="bi bi-arrow-down-short"></i></p>
							<ul className="list-group mb-2">
								{comleted_items}
							</ul>
						</div>
					)}
					
				</div>
			</div>
		</div>
	);
}
 
export default TaskList;