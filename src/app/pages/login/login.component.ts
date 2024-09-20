import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'ovm-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  isFormSubmitted: boolean = false;

 get f() { return this.loginForm.controls; }


  private loginService = inject(LoginService)

  constructor(private fb: FormBuilder, private router: Router) { }

  login() {
    this.isFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      let formdata = {
        email: this.f.email.value,
        password: this.f.password.value
      }
      this.loginService.login(formdata).subscribe(res => {
        if (res.data) {
          this.router.navigate(['/dashboard'])
        }
      })
    }
  }

}
