import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

const App = () => {
	const maxLen = 240;
	const [statusValue, setStatusValue] = useState("");
	const [textLen, setTextLen] = useState(240);
	const [remainingCharacters, setRemainingCharacters] = useState(0);

	const checkStatusValue = e => {
		const currentTextLen = e.target.value.length;
		setStatusValue(e.target.value);
		setRemainingCharacters(currentTextLen);
	};

	useEffect(() => {
		setTextLen(maxLen - remainingCharacters);
	}, [remainingCharacters]);

	return (
		<div>
			<p>{textLen} characters left</p>
			<textarea
				name="status"
				id="status"
				cols="30"
				rows="10"
				required
				maxLength="240"
				value={statusValue}
				onChange={checkStatusValue}></textarea>
			<button
				disabled={
					remainingCharacters <= 0 || remainingCharacters > maxLen
						? true
						: false
				}>
				Tweet
			</button>
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
