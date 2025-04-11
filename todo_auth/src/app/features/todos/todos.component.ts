import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../core/todo.service';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todoService = inject(TodoService);
  auth = inject(AuthService);

  newTask = '';

  add() {
    if (this.newTask.trim()) {
      this.todoService.addTodo(this.newTask.trim());
      this.newTask = '';
    }
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }

  toggle(id: number) {
    this.todoService.toggleTodo(id);
  }
}