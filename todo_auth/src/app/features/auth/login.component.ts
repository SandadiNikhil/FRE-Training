import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms';
import { map, of, delay, debounceTime, switchMap } from 'rxjs';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  // Hardcoded allowed usernames
  private allowedUsers = ['Nikhil', 'Alice', 'Bob', 'Antra'];

  private auth = inject(AuthService);


  form = this.fb.group({
    username: [
      '',
      {
        validators: [Validators.required],
        asyncValidators: [this.usernameExistsValidator()],
        updateOn: 'change',
      },
    ],
  });

  get username() {
    return this.form.get('username');
  }

  usernameExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return of(control.value).pipe(
        debounceTime(500),
        switchMap((value) =>
          of(this.allowedUsers.includes(value)).pipe(
            delay(500), // API call delay
            map(isValid => (isValid ? null : { userNotFound: true }))
          )
        )
      );
    };
  }

  login() {
    if (this.form.valid) {
      const username = this.form.value.username!;
      this.auth.login(username);
      console.log('Logging in with:', this.form.value.username);
    }
  }
}
