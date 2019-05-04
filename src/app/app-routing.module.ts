import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'technician-sign-up', loadChildren: './technician-sign-up/technician-sign-up.module#TechnicianSignUpPageModule' },
  { path: 'customer-sign-up', loadChildren: './customer-sign-up/customer-sign-up.module#CustomerSignUpPageModule' },  { path: 'technician-join', loadChildren: './technician-join/technician-join.module#TechnicianJoinPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
