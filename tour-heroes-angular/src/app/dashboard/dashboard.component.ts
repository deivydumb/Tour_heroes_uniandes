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
  searchTerm: string = '';
  foundHero: Hero | undefined;

  getData(): void{
    this.heroes = HEROES
    
  }



  searchHero(){  
    this.heroes = HEROES
    const foundHero = this.heroes.find(hero =>
      hero.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (foundHero) {
      this.foundHero = foundHero;
    } else {
      this.foundHero = {id:0,name:'',description:''};
    }
 
  }
}
