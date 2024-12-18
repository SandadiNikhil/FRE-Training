export const API = (() => {
	//const baseUrl = "https://jsonplaceholder.typicode.com";
	const baseUrl = "http://localhost:4232";
	const todoUrl = "todos";

	const getTodos = () =>
		fetch(`${baseUrl}/${todoUrl}`).then((response) => response.json());


	const addTodo = (newtodo) =>
		fetch(`${baseUrl}/${todoUrl}`, {
			method: "POST",
			body: JSON.stringify(newtodo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());

	const deleteTodo = (id) => {
		console.log('Deleting Todo with ID:', id);
		return fetch([baseUrl, todoUrl, id].join("/"), {
			method: 'DELETE',
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to delete todo');
				}
				return response; // or response.text() if you prefer
			});
	};

	const updateTodo = (id, updatedFields) =>
		fetch(`${baseUrl}/${todoUrl}/${id}`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(updatedFields),
		}).then((response) => response.json());


	return {
		getTodos,
		deleteTodo,
		addTodo,
		updateTodo
	};
})();