import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { ModalHeroesComponent } from './modal-heroes/modal-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListHeroesComponent,
    ModalHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
