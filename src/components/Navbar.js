import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
	const { books } = useContext(BookContext);
	const bookLen = books.length === 1 ? "book" : "books";
	return (
		<nav className="center">
			<h1>Reading List</h1>
			<p>
				Currently you have {books.length} {bookLen} to get through
			</p>
		</nav>
	);
};

export default Navbar;
