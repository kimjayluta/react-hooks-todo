import React, {useState} from 'react';
import './App.css';
// Function that Prints the Todo list.
function Todo({ todo, index, completeTodo, deleteTodo}){
	return (
		<div 
			style={{textDecoration: todo.isCompleted 	? 'line-through' : ''}} 
			className="todo"
		>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => deleteTodo(index)}>x</button>
			</div>
		</div>
	);
}

function TodoForm({addTodo}) {
	const [ value, setValue ] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if(!value) return;
		addTodo(value);
		setValue('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				placeholder="Add Todo..."
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	);
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
	// Pag tig call ang AddTodo function...
	const addTodo = text => {
		// Ma e siset si Todo sa variable na newTodos...
		const newTodos = [...todos, {text}];
		// Tapus e cacall ang function na setTodos with parameter newTodos
		setTodos(newTodos);
	}

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	}

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
				))}
				{/* Pag nag enter ang user ning Todo e cacall ang function na AddTodo */}
				<TodoForm addTodo={addTodo}/>
			</div>
		</div>
	);
}

export default App;
