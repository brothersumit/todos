//import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const {tasks} = useSelector(state => state.tasks);
  return (
    <div className="App">
      <h1>Todos</h1>
      
    </div>
  );
}

export default App;
