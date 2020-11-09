import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App m-5">
      <h1>Todo-App</h1>
      <TodoInput/>
      <h2 className="my-3">Todo Lists</h2>
     
      <TodoList/>
      

    </div>
  );
}

export default App;
