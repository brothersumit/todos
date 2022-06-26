const TaskAdd = () => {
	return ( 
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 mx-auto">
					<form>
						<div className="row">
							<div className="col-md-11">
								<input type="text" className="form-control" />
							</div>
							<div className="col-md-1">
								<button type="submit" className="btn btn-outline-primary float-end"><i class="bi bi-plus-circle"></i></button>
							</div>
							
						</div>					
						
					</form>
				</div>
			</div>
		</div>
	);
}
 
export default TaskAdd;