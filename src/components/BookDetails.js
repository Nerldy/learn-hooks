import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = props => {
	const { title, author, id } = props.book;
	const { removeBook } = useContext(BookContext);
	return (
		<article className="book-detail center" onClick={() => removeBook(id)}>
			<h2>{title}</h2>
			<p>Wriiten by: {author}</p>
		</article>
	);
};

export default BookDetails;
