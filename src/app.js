import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let todos = [
	{
		id: 1,
		title: 'lunch',
		description: 'Go for lunc by 2pm'
	}
]

app.get('/', (req, res) => {
	res.send('Hello World!');
})

app.get('/todos', (req, res) => {
	res.send(todos);
})

app.post('/todos', (req, res) => {
	const {
		title,
		description
	} = req.body;

	const id = todos.length + 1;

	const newTodo = {
		id,
		title,
		description
	}

	todos.push(newTodo);

	res.send(newTodo);
})

app.put('/todos/:id', (req, res) => {
	const { id } = req.params; // id: '2'
	const {
		title,
		description
	} = req.body;

	const todo = todos.find(todo => todo.id === Number(id));

	todo.title = title;
	todo.description = description;
	
	res.send(todo);
})

app.delete('/todos/:id', (req, res) => {
	const { id } = req.params; // id: '2'

	todos = todos.filter(todo => todo.id !== Number(id));

	res.send(todos);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`); 
});