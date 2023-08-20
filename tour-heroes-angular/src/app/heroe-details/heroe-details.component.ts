import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
})
export class HeroeDetailsComponent implements OnInit {
  heroes = HEROES;
  hero:  Hero= { id: 0, name: '', description: '' };
  heroForm: FormGroup = new FormGroup({}); 
  
  myId:string|null = '-1';


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private router :Router

  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const hero = this.heroes.find(heroe => heroe.id === id);
      if (hero) {
        this.hero = hero;
      } else {
        console.log(`No se encontró el héroe con ID ${id}`);
      }
    });
  }

  initializeForm(hero: Hero) {
    this.heroForm = this.formBuilder.group({
      id: [hero.id],
      name: [hero.name, Validators.required],
      description: [hero.description, Validators.required]
    });
  }

  saveHero() {
    if (this.hero) {
     console.log(this.hero)
    }
  }

  updateHero() {
    const index = this.heroes.findIndex(heroe => heroe.id === this.hero.id);
    if (index !== -1) {
      this.heroes[index] = this.hero;
      console.log('Lista de héroes actualizada:', this.heroes);
     
    } else {
      console.log(`No se encontró el héroe con ID ${this.hero.id} en la lista`);
    }
    this.router.navigate(['/dashboard']);
  }
}
