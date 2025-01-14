import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  get email() {
    return this.loginForm.get('email');
  }

  get pwd() {
    return this.loginForm.get('pwd');
  }

  constructor(private fb: FormBuilder, private _router:Router) {}

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      pwd: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
    
  }
  Notflix() {
    this._router.navigate(['movieList'])
    }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
