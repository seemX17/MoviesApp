import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZoomTestComponent } from './zoom-test/zoom-test.component';

const routes: Routes = [
  {
    path: '',
    component: ZoomTestComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
]

@NgModule({
  declarations: [
    CreateComponent,
    DashboardComponent,
    DetailsComponent,
    SearchPipe,
    ZoomTestComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
