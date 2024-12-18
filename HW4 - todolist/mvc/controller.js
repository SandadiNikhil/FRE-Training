
import { Model } from './model.js';
import { View } from './view.js';

export const Controller = ((model, view) => {

    const state = new model.State();
    const todoContainer = document.querySelector(`.${view.domstr.listContainer}`);
    const inputbox = document.querySelector(`.${view.domstr.inputBox}`);

    const highlightTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            const target = e.target.closest(".todo-text");
            if (target) {
                const listItem = target.closest("li");
                const todoId = listItem.querySelector(".delete-btn").id;

                const isHighlighted = listItem.classList.contains("highlighted");
                listItem.classList.toggle("highlighted");

                model.updateTodo(todoId, { completed: !isHighlighted })
                    .then(() => {
                        if (listItem.classList.contains("highlighted")) {
                            state.highlightedTodos.add(todoId);
                        } else {
                            state.highlightedTodos.delete(todoId);
                        }
                        localStorage.setItem("highlightedTodos", JSON.stringify([...state.highlightedTodos]));
                        console.log("Highlighted Todos:", [...state.highlightedTodos]);
                    })
                    .catch(err => {
                        console.error("Error updating todo:", err);
                    });
            }
        });
    };

    const deleteTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains(view.domstr.deleteBtn)) {
                const todoId = e.target.id;
                model.deleteTodo(todoId)
                    .then(() => {
                        state.todolist = state.todolist.filter(
                            (todo) => todo.id.toString() !== todoId
                        );
                    })
                    .catch(err => console.error('Error deleting todo:', err));
            }
        });
    };

    const toggleTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("todo-text")) {
                const btn = e.target.closest("li").querySelector(`.${view.domstr.deleteBtn}`);
                const id = btn.id;
                const clickedTodo = state.todolist.find(todo => todo.id == id);

                if (!clickedTodo) return;

                const newCompletedValue = !clickedTodo.completed;
                clickedTodo.completed = newCompletedValue;

                e.target.classList.toggle("done");

                model.updateTodo(id, { completed: newCompletedValue })
                    .catch(err => console.error(err));

                state.todolist = [...state.todolist];
            }
        });
    };

    const addTodo = () => {
        inputbox.addEventListener("keyup", (e) => {
            if (e.key === "Enter" && e.target.value.trim() !== '') {
                const newtodo = new model.Todo(e.target.value);

                model.addTodo(newtodo)
                    .then((todoFromServer) => {
                        state.todolist = [todoFromServer, ...state.todolist];
                    });
                e.target.value = '';
            }
        });
    };

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
        toggleTodo();
        highlightTodo();
    };

    return { bootstrap };

})(Model, View);