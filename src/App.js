import React, {useState} from 'react';
import './App.css';

function Todo({ todo, index}){
	return <div className="todo">{todo.text}</div>
}

function App() {
	const [todos, setTodos] = useState([
		{
			text: "Learn About React",
			isCompleted: false
		},
		{
			text: "Meet Friend for lunch",
			isCompleted: false
		},
		{
			text: "Build a really cool App",
			isCompleted: false
		}
	]);

	return (
		<div className="App">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} />
				))}
			</div>
		</div>
	);
}

export default App;
