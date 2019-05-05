import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'technician-log-in', loadChildren: './technician-log-in/technician-log-in.module#TechnicianLogInPageModule' },
  { path: 'user-log-in', loadChildren: './user-log-in/user-log-in.module#UserLogInPageModule' },
  { path: 'technician-join', loadChildren: './technician-join/technician-join.module#TechnicianJoinPageModule' },  { path: 'user-join', loadChildren: './user-join/user-join.module#UserJoinPageModule' }

  

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
