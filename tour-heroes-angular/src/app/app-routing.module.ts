import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { ModalHeroesComponent } from './modal-heroes/modal-heroes.component';

const routes: Routes = [
  {path: 'dashboard',component:DashboardComponent},
  {path: 'lista-heroes',component:ListHeroesComponent},
  {path:'modal-heroes',component:ModalHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
