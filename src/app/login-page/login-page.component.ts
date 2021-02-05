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
      this.bs.loginSend(form).subscribe((res) => {
        this.bs.currentUser = res;
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', this.bs.currentUser.fullname);
        localStorage.setItem('userid', this.bs.currentUser._id);
        this.router.navigate(['todolist']);
      });
    }
  }
}
