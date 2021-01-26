import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from "../todo";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todoDetail: number;
  pickedTodo: Todo;
  todos = this.todoService.todos

  constructor(
    public todoService: TodoService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.todoDetail = this.route.snapshot.params['date']
    this.pickedTodo = this.todoService.todos.find(element => element.date == this.todoDetail);
    this.todoService.pickedTodo = this.pickedTodo
  }
}
