import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../shared/back.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  date = new Date().toLocaleDateString('en-us');
  fullname: string;

  constructor(private bs: BackService, private router: Router) {}
  ngOnInit() {
    this.fullname = localStorage.getItem('user');
  }

  loggingOut() {
    this.bs.authStatus = false;
    localStorage.setItem('auth', this.bs.authStatus);
    localStorage.removeItem('user');
    localStorage.removeItem('userid');
    this.router.navigate(['login']);
  }
}
