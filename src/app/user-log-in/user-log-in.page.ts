import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.page.html',
  styleUrls: ['./user-log-in.page.scss'],
})
export class UserLogInPage implements OnInit {

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['home']);
  }
  signUp() {
    this.router.navigate(['user-join']);
  }
  ngOnInit() {
  }

}
