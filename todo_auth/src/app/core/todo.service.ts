import { Injectable, signal, computed } from '@angular/core';
import { Todo } from '../shared/todo.model';

const STORAGE_KEY = 'todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private idCounter = 1;

  private _todos = signal<Todo[]>(this.loadFromStorage());
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  readonly todos = computed(() => this._todos());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());

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
    const maxId = this._todos().reduce((max, t) => Math.max(max, t.id), 0);
    this.idCounter = maxId + 1;
  }

  addTodo(text: string) {
    const newTodo: Todo = {
      id: this.idCounter++,
      text,
      completed: false,
    };
    this._todos.update(todos => {
      const updated = [...todos, newTodo];
      this.saveToStorage();
      return updated;
    });
  }

  deleteTodo(id: number) {
    this._todos.update(todos => {
      const updated = todos.filter(todo => todo.id !== id);
      this.saveToStorage();
      return updated;
    });
  }

  toggleTodo(id: number) {
    this._todos.update(todos => {
      const updated = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      this.saveToStorage();
      return updated;
    });
  }

  clearAll() {
    this._todos.set([]);
    this.saveToStorage();
  }
}
