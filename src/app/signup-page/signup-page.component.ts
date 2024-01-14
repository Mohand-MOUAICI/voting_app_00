import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  registerForm: FormGroup;
  user = { username: '', email: '', password: '' };

  constructor(private authService:AuthService,
    private router:Router,private formBuilder: FormBuilder){
      this.registerForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  onSignup() {
    this.authService.register(this.registerForm.value).subscribe({
      next: result => {
        this.router.navigateByUrl('/login');
      }, error: err => {
        console.log(err)
      }
    })
  }
}
