import { useDispatch, useSelector } from "react-redux";
import notasks from '../images/notasks.png';
import TaskListItem from "./TaskListItem";

const TaskList = () => {
	const {tasks} = useSelector(state => state.tasks)

	//Filter ongoing tasks
	const ongoing_tasks = tasks.filter(task => {
		return task.isDone === false;
	})
	const items = ongoing_tasks.map(task => {
		return (
			<TaskListItem key={task.id} task={task}/>
		)
	}).reverse();

	//Filter complted tasks
	const completed_tasks = tasks.filter(task => {
		return task.isDone === true;
	})
	const comleted_items = completed_tasks.map(task => {
		return (
			<TaskListItem key={task.id} task={task} />
		)
	})


	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 col-12 mx-auto">
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
							<p className="mt-5">Completed Tasks <i className="bi bi-arrow-down-short"></i></p>
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