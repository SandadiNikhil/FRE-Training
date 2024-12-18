import {API} from './api.js';
import {View} from './view.js';

export const Model = ((api, view) => {
	class State {

		#todolist = [];
		#todoContainer = document.querySelector(`.${view.domstr.listContainer}`);
		highlightedTodos = new Set();

		get todolist() {
			return this.#todolist;
		}

		set todolist(newtodolist) {
			if (JSON.stringify(this.#todolist) === JSON.stringify(newtodolist)) {
				return;
			}

			this.#todolist = [...newtodolist];

			const tmp = view.createTmp(this.#todolist);
			view.render(this.#todoContainer, tmp);


			const savedHighlights = JSON.parse(localStorage.getItem("highlightedTodos")) || [];
			console.log("Applying Highlights:", savedHighlights);

			// this.#todolist.forEach(todo => {
			// 	if (todo.completed) {
			// 	const listItem = document.getElementById(todo.id)?.closest("li");
			// 		if (listItem) listItem.classList.add("highlighted");
			// 	}
			// });

			this.#todolist.forEach(todo => {
				const todoId = todo.id.toString(); // Normalize ID
				const listItem = document.getElementById(todo.id)?.closest("li");
				if (listItem) {
					//if (todo.completed || savedHighlights.includes(todo.id.toString())) {
					if (todo.completed || savedHighlights.includes(todoId))
						listItem.classList.add("highlighted");
				}else
					console.error("ListItem Not Found for Todo ID:", todoId);
			});
		}
	}

	class Todo {
		constructor(title) {
			this.userId = 22;
			this.title = title;
			this.completed = false;
		}
	}

	const updateTodo = (id, updatedFields) => {
		return api.updateTodo(id, updatedFields);
	};

	return {
		...api,
		State,
		Todo,
		updateTodo
	};

})(API, View);