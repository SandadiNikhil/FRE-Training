import {Model} from './model.js';
import {View} from './view.js';

export const Controller = ((model, view) => {
	const state = new model.State();
	const todoContainer = document.querySelector(
		`.${view.domstr.listContainer}`
	);
	const inputbox = document.querySelector(`.${view.domstr.inputBox}`);

	const deleteTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains(view.domstr.deleteBtn)) {
                const todoId = e.target.id;
                model.deleteTodo(todoId).then(() => {
                        state.todolist = state.todolist.filter(
                            (todo) => todo.id !== todoId);
                })
                .catch(err => {
                    console.error('Error deleting todo:', err);
                });
            }
        });
    };

    const toggleTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("todo-text")) {
                e.target.classList.toggle("done");
            }
        });
    };

	const addTodo = () => {
		inputbox.addEventListener("keyup", (e) => {
			if (e.key === "Enter" && e.target.value.trim() !== '') {
				const newtodo = new model.Todo(e.target.value);

				model.addTodo(newtodo).then((todoFromServer) => {
                    state.todolist = [todoFromServer, ...state.todolist];
                });
        e.target.value = '';
			}
		});
	};

	const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
            console.log('Initialized State:', state.todolist);
        });
    };


	const bootstrap = () => {
		init();
		deleteTodo();
		addTodo();
		toggleTodo();
	};

	return { bootstrap };
})(Model, View);
