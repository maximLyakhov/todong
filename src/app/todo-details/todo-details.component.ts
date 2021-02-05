import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../shared/back.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private bs: BackService
  ) {}

  currentItem;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('date');
    this.bs.getSingleTodo(id).subscribe((res) => {
      this.currentItem = res;
    });
  }
}
