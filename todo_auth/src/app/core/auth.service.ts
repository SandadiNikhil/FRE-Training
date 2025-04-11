import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<string | null>(this.loadUser());

  readonly isAuthenticated = computed(() => this._user() !== null);

  constructor(private router: Router) {}

  login(username: string) {
    this._user.set(username);
    localStorage.setItem('user', username); 
    this.router.navigate(['/todos']);
  }

  logout() {
    this._user.set(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getUsername(): string | null {
    return this._user();
  }

  private loadUser(): string | null {
    return localStorage.getItem('user');
  }
}
