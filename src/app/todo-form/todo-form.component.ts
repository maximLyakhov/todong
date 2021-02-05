import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackService } from '../shared/back.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todoForm = this.fb.group(
    {
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
    },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder,
    private bs: BackService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoForm.valueChanges.subscribe(() => {});
  }

  onSubmit(form: FormGroup) {
    if (this.todoForm.valid) {
      let preparedTodo = {
        ...form.value,
        date: Date.now(),
        done: false,
        userid: localStorage.getItem('userid'),
      };
      this.bs.postTodo(preparedTodo).subscribe(() => {});
      form.reset();
      this.router.navigate(['todolist']);
    }
  }
}
