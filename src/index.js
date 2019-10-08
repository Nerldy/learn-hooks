import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
// import "./reset.css";
import "./index.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
	return (
		<div>
			<BookContextProvider>
				<Navbar />
				<BookForm />
				<BookList />
			</BookContextProvider>
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
