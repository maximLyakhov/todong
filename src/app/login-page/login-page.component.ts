import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackService } from '../shared/back.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: [''],
  });

  authApproved;

  authStatus = JSON.parse(localStorage.getItem('auth'));

  constructor(
    private fb: FormBuilder,
    public backService: BackService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.backService.loginSend(form).subscribe((res) => {
      if (this.loginForm.valid) {
        this.router.navigate(['todolist']);
        localStorage.setItem('auth', 'true');
        this.authApproved = res;
      }
    });
  }

  loggingOut() {
    this.authStatus = false;
    localStorage.setItem('auth', this.authStatus);
  }
}
