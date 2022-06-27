import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTask } from '../store/actions/taskActions';
import uniqid from 'uniqid';

const TaskAdd = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	
	const handleText = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if(text !== ''){
			const formdata = {id: uniqid(), name: text, isDone: false}
			dispatch(addTask(formdata));
			setText('');
		}
	}

	return ( 
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 col-12 mx-auto">
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-md-11 col-10">
								<input type="text" className="form-control" value={text} onChange={handleText} placeholder="Enter task to do."/>
							</div>
							<div className="col-md-1 col-2">
								<button type="submit" className="btn btn-outline-primary float-end"><i className="bi bi-plus-circle"></i></button>
							</div>
							
						</div>					
						
					</form>
				</div>
			</div>
		</div>
	);
}
 
export default TaskAdd;