import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  getData(): void{
    this.heroes = HEROES
    
  }


  searchHeroe(id: number){
    console.log(id)
     let data = this.heroes.find(heroe => heroe.id === id)
     console.log(data)
    return data
  }
}
