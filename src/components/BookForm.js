import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
	const [userInput, setUserInput] = useState({ name: "", value: "" });
	const [bookTitle, setBookTitle] = useState("");
	const [bookAuthor, setBookAuthor] = useState("");
	const { addBook } = useContext(BookContext);
	const captureUserInput = e => {
		const { value, name } = e.target;
		setUserInput({ name, value });
	};

	useEffect(() => {
		const { value, name } = userInput;
		name === "bookTitle" ? setBookTitle(value) : setBookAuthor(value);
	}, [userInput]);

	const submitForm = e => {
		e.preventDefault();
		addBook(bookTitle, bookAuthor);
		setBookTitle("");
		setBookAuthor("");
	};
	return (
		<div>
			<form onSubmit={submitForm} className="center">
				<div className="bookTitle">
					<label htmlFor="book-title">Title</label>
					<input
						type="text"
						required
						autoFocus
						value={bookTitle}
						id="book-title"
						name="bookTitle"
						onChange={captureUserInput}
					/>
				</div>
				<div className="bookAuthor">
					<label htmlFor="book-author">Author</label>
					<input
						type="text"
						required
						value={bookAuthor}
						id="book-author"
						required
						name="bookAuthor"
						onChange={captureUserInput}
					/>
				</div>
				<input
					type="submit"
					value="Create Book"
					id="create-book-button"
				/>
			</form>
		</div>
	);
};

export default BookForm;
