import './App.css';
import Header from './components/Header';
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="App">
		<Header />
		<TaskAdd />
        <TaskList />
    </div>
  );
}

export default App;
