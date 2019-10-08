import React, { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
	const { books } = useContext(BookContext);
	return books.length ? (
		books.map(book => <BookDetails book={book} key={book.id} />)
	) : (
		<section className="no-book-detail center">
			<p>No Books Available</p>
		</section>
	);
};

export default BookList;
