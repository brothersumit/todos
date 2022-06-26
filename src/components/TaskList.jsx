import { useSelector } from "react-redux";

const TaskList = () => {
	const {tasks} = useSelector(state => state.tasks)

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 mx-auto">
					<ul class="list-group">
						{tasks.map(task => {
							return (
								<li class="list-group-item" key={task.id}>
									<div className="row task-item">
										<div className="col-md-1 text-center">
											<input class="form-check-input list-checkbox" type="checkbox" />
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
						})}
					</ul>

				</div>
			</div>
		</div> 
		
	 );
}
 
export default TaskList;