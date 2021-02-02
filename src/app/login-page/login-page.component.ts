import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackService } from '../shared/back.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.fb.group({
    email: 'kek@kok.com',
    password: [''],
  });

  authStatus = JSON.parse(localStorage.getItem('auth'));

  constructor(private fb: FormBuilder, public backService: BackService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.backService.loginSend(form);
    if (this.backService.authApproved) {
      localStorage.setItem('auth', 'true');
    } else {
    }
  }

  loggingOut() {
    this.authStatus = false;
    localStorage.setItem('auth', this.authStatus);
  }
}
