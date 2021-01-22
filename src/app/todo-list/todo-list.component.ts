import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }
  
  pushTodo (val) {
    this.todoService.pushTodo(val)
  }
  
  checkingTodo(i) {
    console.log(i);
    this.todoService.todos[i].done = !this.todoService.todos[i].done
    this.todoService.localStorageSetItem()
  }

  deleteTodo (val) {
    this.todoService.deleteTodo(val)
  }
}

