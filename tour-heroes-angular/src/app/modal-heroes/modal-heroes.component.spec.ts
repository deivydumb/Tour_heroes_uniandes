import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeroesComponent } from './modal-heroes.component';

describe('ModalHeroesComponent', () => {
  let component: ModalHeroesComponent;
  let fixture: ComponentFixture<ModalHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
