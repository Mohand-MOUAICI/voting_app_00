import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['bassirou.diallo@gmail.com', Validators.required],
      password: ['toor98', Validators.required]
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: result => {
        console.log(result)
        // @ts-ignore
        localStorage.setItem('email', result['email'])
        // @ts-ignore
        localStorage.setItem('token', result['idToken'])
        this.router.navigateByUrl('/vote');
      }, error: err => {
        console.log(err)
      }
    })
  }
}
