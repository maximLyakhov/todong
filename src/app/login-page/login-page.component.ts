import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackService } from '../shared/back.service';
import { LoginInfo } from '../shared/interfaces/login.info.dto';

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

  constructor(
    private fb: FormBuilder,
    public bs: BackService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.bs.authStatus === false) {
      this.router.navigate(['login']);
    }
  }

  onSubmit(form) {
    if (this.loginForm.valid) {
      this.bs.loginSend(form).subscribe((res: LoginInfo) => {
        this.bs.currentToken = res.user.token;
        this.bs.currentUser = res.user._id;
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', res.user.fullname);
        localStorage.setItem('userid', res.user._id);
        localStorage.setItem('currentToken', res.user.token);
        this.router.navigate(['todolist']);
      });
    }
  }
}
