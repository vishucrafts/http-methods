fetch("http://localhost:3000/todos")
	.then((res) => res.json())
	.then((data) => console.log(data, 'get'));

// Post
fetch("http://localhost:3000/todos", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		title: "Groceries",
		description: "Go for groceries by 8pm",
	}),
}).then((res) => res.json())
	.then((data) => console.log(data, "post"));

// Delete
fetch("http://localhost:3000/todos/1", {
	method: "DELETE",
}).then((res) => res.json())
	.then((data) => console.log(data, "delete"));

