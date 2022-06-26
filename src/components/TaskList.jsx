import { useSelector } from "react-redux";
import notasks from '../images/notasks.png';

const TaskList = () => {
	const {tasks} = useSelector(state => state.tasks)

	const items = tasks.map(task => {
		return (
			<li className="list-group-item" key={task.id}>
				<div className="row task-item">
					<div className="col-md-1 text-center">
						<input className="form-check-input list-checkbox" type="checkbox" />
					</div>
					<div className="col-md-9">
						<input type="text" className="form-control-plaintext" readOnly value={task.name} />
					</div>
					<div className="col-md-2 text-end">
						<button type="button" className="btn btn-outline-primary me-1"><i className="bi bi-pencil-square"></i></button>
						<button type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
					</div>								
				</div>
			</li>
		)
	}).reverse();

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 mx-auto">
					<ul className="list-group">
						{(items.length === 0) ? (<li className="list-group-item text-center no-tasks"><img src={notasks} alt="No tasks yet" height={100}/> <p className="mt-1">No tasks here yet</p></li>) : items}
					</ul>

				</div>
			</div>
		</div> 
		
	 );
}
 
export default TaskList;