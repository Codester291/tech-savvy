import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technician-join',
  templateUrl: './technician-join.page.html',
  styleUrls: ['./technician-join.page.scss'],
})
export class TechnicianJoinPage implements OnInit {

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['technician-sign-up']);
  }

  ngOnInit() {
  }

}
