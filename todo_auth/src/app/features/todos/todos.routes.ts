import { Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { authGuard } from '../../core/auth.guard';

export const TODOS_ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent,
    canActivate: [authGuard],
  },
];
