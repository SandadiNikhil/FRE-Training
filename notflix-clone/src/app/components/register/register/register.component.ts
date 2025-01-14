import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})


// export class MainRegisterComponent {
//   private _formBuilder = inject(FormBuilder);

//   firstFormGroup: FormGroup = this._formBuilder.group({
//     email: ['', [Validators.required, Validators.email]], // Updated field name and validation for email
//   });
//   secondFormGroup: FormGroup = this._formBuilder.group({
//     password: ['', [Validators.required, Validators.minLength(6)]], // Updated field name and validation for password
//   });
  
//   isLinear = false; 

//   onSubmit(): void {
//     if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
//       const email = this.firstFormGroup.get('email')?.value;
//       const password = this.secondFormGroup.get('password')?.value;
//       console.log('Form Submitted:', { email, password });
//     } else {
//       console.error('Form is invalid');
//     }
//   }
// }


export class MainRegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {} 

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]], 
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
      } else {
        console.log('Form Submitted:', { email, password });
      }
    } else {
      console.error('Form is invalid');
    }
  }
}