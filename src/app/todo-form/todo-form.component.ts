import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackService } from '../shared/back.service';

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

  constructor(
    private fb: FormBuilder, 
    private backService: BackService) {}

  ngOnInit(){
    this.todoForm.valueChanges.subscribe(res => {
      console.log(this.todoForm.value)
    })
  }

  onSubmit(form: FormGroup) {
    if (this.todoForm.valid) {
      this.backService.postTodo(form.value).subscribe(res => {
      })
    }
    form.reset()
  }
}
