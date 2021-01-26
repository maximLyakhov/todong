import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{
  
  todoForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  },
  {updateOn: 'submit'}
  )

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(){
    this.todoForm.valueChanges.subscribe(r => {
      console.log( this.todoForm);
    })
  }

  onSubmit(form: FormGroup) {
    if (this.todoForm.valid) {
      this.todoService.pushTodo(form.value)
      form.reset()
    }
  }
}
