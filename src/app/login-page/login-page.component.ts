import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackService } from '../shared/back.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    email: 'kek@kok.co',
    password: [''],
  })

  constructor(
    private fb: FormBuilder,
    private backService: BackService,
  ) { }

  ngOnInit(): void {
  
  }

  onSubmit(form: FormGroup){
    if (this.loginForm.get('email').value === "kek@kok.com"){
      let auth = 'true'
      localStorage.setItem('auth', auth)
    } else {
      let auth = 'false'
      localStorage.setItem('auth', auth)
      alert('no-no-no!')
    }
  }

}
