import "@babel/polyfill";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

function fetchPost(id) {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
		res => {
			res.json();
			console.log({ res });
		}
	);
}

function* getNextPostId(posts = []) {
	let count = 0;
	for (var i = 0; i < posts.length; i++) {
		yield postIds[i];
	}
}

function getCurrentPostId(post) {
	const fetchPostId = getNextPostId(post);
	return fetchPostId.next().value;
}

const fetchPostId = getNextPostId(postIds);

const App = () => {
	const [idOfPost, setIdOfPost] = useState(fetchPostId.next().value);
	const [post, setPost] = useState("");

	useEffect(() => {
		// setIdOfPost(fetchPostId.next().value);
		console.log("in use effect", { idOfPost });
	}, []);

	// useEffect(() => {
	// 	setIdOfPost(fetchPostId.next().value);
	// }, [fetchPostId]);
	// const [isfetched, setIsfetched] = useState(false);
	// useEffect(() => {
	// 	try {
	// 		setIsfetched(true);
	// 		fetchPost(postId).then(res => {
	// 			if (Object.keys(res).length < 1) {
	// 				setPost({
	// 					message: {
	// 						id: 1,
	// 						title: "Not Found",
	// 						body: "Post not found"
	// 					}
	// 				});
	// 				setIsfetched(false);
	// 			}
	// 			console.log({ res });
	// 			console.log({ postIds });
	// 			setPost(res);
	// 			setIsfetched(false);
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }, [postId]);

	const fetchNextPost = () => {
		console.log("-".repeat(25), { idOfPost });
		setIdOfPost(fetchPostId.next().value);
	};

	const { title, body, id } = post;

	return (
		<div>
			<section>
				<h1>{title}</h1>
				<p>{body}</p>
				<button onClick={fetchNextPost}>Next Post</button>
			</section>
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
