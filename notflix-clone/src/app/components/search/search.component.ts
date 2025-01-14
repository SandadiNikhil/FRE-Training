import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class NavBarComponent {
  constructor(private router: Router) {}

  signIn() {
    console.log('Signin clicked');
    this.router.navigate(['/login']);
  }
}
