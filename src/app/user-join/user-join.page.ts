import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-join',
  templateUrl: './user-join.page.html',
  styleUrls: ['./user-join.page.scss'],
})
export class UserJoinPage implements OnInit {

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['user-log-in']);
  }
  ngOnInit() {
  }

}
