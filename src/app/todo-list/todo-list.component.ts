import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
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
  
  pushTodo (val: Todo) {
    this.todoService.pushTodo(val)
  }
  
  deleteTodo (val: Todo) {
    this.todoService.deleteTodo(val)
  }

  checkingTodo(index: number) {
    this.todoService.todos[index].done = !this.todoService.todos[index].done
    this.todoService.localStorageSetItem()
  }
}