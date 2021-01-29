import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { BackService } from '../shared/back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos;

  constructor(private backService: BackService,
    private router: Router) {}

  ngOnInit(): void {
    this.backService.getTodos().subscribe(res => {
        this.todos = res;
    })
  }

  pushTodo (val: Todo) {
    this.backService.postTodo(val).subscribe(() => {

    })
  }

  checkingTodo(index: number) {
    this.backService.getTodos().subscribe(res =>{
      this.todos[index].done = res
    })
  }
}