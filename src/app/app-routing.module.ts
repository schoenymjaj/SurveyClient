import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'dashboard/exerciser',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'third',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
