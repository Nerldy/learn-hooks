import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

const timeMeOut = (time, ui) => {
	return setTimeout(() => {
		return { ui, uiState: true };
	}, time);
};

function Wait({ delay = 3000, placeholder, ui }) {
	const [uiState, setUiState] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setUiState(true);
		}, delay);
	}, [delay]);
	return (
		<div>
			<h1>Ona</h1>
			{uiState ? ui : placeholder}
		</div>
	);
}

const App = () => {
	return (
		<Wait
			delay={3000}
			placeholder={<p>Waiting...</p>}
			ui={<p>This text should appear after 3 seconds.</p>}
		/>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
