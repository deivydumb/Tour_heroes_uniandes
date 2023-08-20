import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeDetailsComponent } from './heroe-details/heroe-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'heroe-detail/:id', component: HeroeDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
