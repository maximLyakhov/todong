import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-one',
  templateUrl: './todo-one.component.html',
  styleUrls: ['./todo-one.component.scss']
})
export class TodoOneComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
