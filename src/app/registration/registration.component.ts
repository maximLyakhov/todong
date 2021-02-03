import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackService } from '../shared/back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  regForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
      consent: ['', [Validators.required]],
    },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder,
    private bs: BackService // private router: Router
  ) {}

  onSubmit() {
    if (this.regForm.valid) {
      const fullname = this.regForm.get('name').value;
      const email = this.regForm.get('email').value;
      const password = this.regForm.get('password').value;
      const preparedRegSend = {
        fullname,
        email,
        password,
      };
      return this.bs.registrationSend(preparedRegSend).subscribe((res) => {
        if (res === true) {
          // this.router.navigate(['todolist']);
        }
      });
    } else {
      alert('You passed incorrect credentials!');
    }
  }
}