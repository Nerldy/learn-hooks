import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

const App = () => {
	const [theme, setTheme] = useState("grey");

	const toBlue = () => setTheme("blue");
	const toGrey = () => setTheme("grey");

	return (
		<div className={`boxer ${theme}`}>
			{theme === "grey" ? (
				<button onClick={toBlue}>Blue</button>
			) : (
				<button onClick={toGrey}>Grey</button>
			)}
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
