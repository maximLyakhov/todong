import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { TodoService } from '../todo.service';
// import { FormArray } from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  
  todoForm = this.fb.group({
    title: ['', Validators.minLength(3)],
    description: [''],
  })

  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
  }
  
  onSubmit (form) {
    this.todoService.pushTodo(form.value)
    form.reset()
  }
  // get aliases() {
  //   return this.todoForm.get('aliases') as FormArray;
  // }
  
  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }
}
