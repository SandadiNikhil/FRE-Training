import { Injectable, signal, computed } from '@angular/core';
import { Todo } from '../shared/todo.model';

const STORAGE_KEY = 'todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private idCounter = 1;

  private _todos = signal<Todo[]>(this.loadFromStorage());

  readonly todos = computed(() => this._todos());

  constructor() {
    this.updateIdCounter();
  }

  private loadFromStorage(): Todo[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._todos()));
  }

  private updateIdCounter() {
    const todos = this._todos();
    if (todos.length > 0) {
      const maxId = todos.reduce((max, t) => Math.max(max, t.id), 0);
      this.idCounter = maxId + 1;
    } else {
      this.idCounter = 1;
    }
  }

  addTodo(text: string) {
    const newTodo: Todo = {
      id: this.idCounter++,
      text,
      completed: false,
    };
    const updated = [...this._todos(), newTodo];
    this._todos.set(updated);
    this.saveToStorage();
  }

  deleteTodo(id: number) {
    const updated = this._todos().filter(todo => todo.id !== id);
    this._todos.set(updated);
    this.saveToStorage();
  }

  toggleTodo(id: number) {
    const updated = this._todos().map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this._todos.set(updated);
    this.saveToStorage();
  }

  clearAll() {
    this._todos.set([]);
    this.saveToStorage();
  }
}
