import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technician-log-in',
  templateUrl: './technician-log-in.page.html',
  styleUrls: ['./technician-log-in.page.scss'],
})
export class TechnicianLogInPage implements OnInit {

  constructor(private router: Router) { }

  onClick(){
    this.router.navigate(['home']);
  }
  
  signUp(){
    this.router.navigate(['technician-join']);
  }

  ngOnInit() {
  }

}
