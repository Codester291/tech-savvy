import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TechnicianLogInPage } from './technician-log-in.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicianLogInPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TechnicianLogInPage]
})
export class TechnicianLogInPageModule {}
