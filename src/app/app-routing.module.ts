import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const indexRoute:Route = {
  path: '',
  loadChildren: './dashboard/dashboard.module#DashboardModule'
}

const fallbackRoute:Route = {
  path: '**',
  component: ErrorComponent
}

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:'./dashboard/dashboard.module#DashboardModule'
  },
  indexRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
