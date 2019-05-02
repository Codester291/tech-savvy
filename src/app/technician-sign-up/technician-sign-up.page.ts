import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technician-sign-up',
  templateUrl: './technician-sign-up.page.html',
  styleUrls: ['./technician-sign-up.page.scss'],
})
export class TechnicianSignUpPage implements OnInit {

  constructor(private router: Router) { }

  onClick(){
    this.router.navigate(['home']);
  }
  about() {
    this.router.navigate(['http://google.com']);
  }

  ngOnInit() {
  }

}
