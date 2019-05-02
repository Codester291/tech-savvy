import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.page.html',
  styleUrls: ['./customer-sign-up.page.scss'],
})
export class CustomerSignUpPage implements OnInit {

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
