export const API = (() => {
	// const baseUrl = "https://jsonplaceholder.typicode.com";
	const baseUrl = "http://localhost:4232";
	const todoUrl = "todos";

	const getTodos = () =>
		fetch([baseUrl, todoUrl].join("/")).then((response) =>
			response.json()
		);

	const addTodo = (newtodo) =>
		fetch([baseUrl, todoUrl].join("/"), {
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


	return {
		getTodos,
		deleteTodo,
		addTodo,
	};
})();
