import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'ovm-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService, HttpClient]
})
export class LoginComponent {

  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required]
  })

  constructor(private loginService: LoginService, private fb: FormBuilder) { }
  
  get getValues(){
    return this.loginForm.controls;
  }

  login() {
    let formdata={
      email:this.getValues.email.value,
      password:this.getValues.password.value
    }
    this.loginService.login(formdata).subscribe(res => {

    })
  }

}
