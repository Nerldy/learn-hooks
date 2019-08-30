import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import uuid from "uuid/v1";
import "./index.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

const Todo = () => {
	const [userInput, setUserInput] = useState(null);
	const [todos, setTodo] = useState([]);

	const readInputData = e => {
		setUserInput(e.target.value);
	};
	const createTodo = () => {
		setTodo([...todos, { id: uuid(), todo: userInput }]);
	};

	const removeTodoItem = id => {
		const delTodo = todos.filter(todo => todo.id !== id);
		setTodo([...delTodo]);
	};

	return (
		<div>
			<input type="text" onChange={readInputData} />
			<button onClick={createTodo}>Add Todo</button>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						{todo.todo}{" "}
						<button onClick={() => removeTodoItem(todo.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
ReactDOM.render(<Todo />, document.getElementById("root"));
