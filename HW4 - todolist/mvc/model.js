import {API} from './api.js';
import {View} from './view.js';

export const Model = ((api, view) => {
	class State {
		#todolist = [];
		#todoContainer = document.querySelector(`.${view.domstr.listContainer}`);

		get todolist() {
			return this.#todolist;
		}

		set todolist(newtodolist) {
			this.#todolist = [...newtodolist];

			const tmp = view.createTmp(this.#todolist);
			view.render(this.#todoContainer, tmp);
		}
	}

	class Todo {
		constructor(title) {
			this.userId = 22;
			this.title = title;
			this.completed = false;
		}
	}

	const updateTodo = (id, updatedData) => {
        return api.put(`/todos/${id}`, updatedData);
    };

	return {
		...api,
		State,
		Todo,
	};
})(API, View);