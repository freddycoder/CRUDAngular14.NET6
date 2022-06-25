import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  updateHero(hero: SuperHero) {
    this.superHeroService.updateSuperHeroes(hero).subscribe(result => {
      this.heroesUpdated.emit(result);
    })
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService.deleteHero(hero).subscribe(result => {
      this.heroesUpdated.emit(result);
    })
  }

  createHero(hero: SuperHero) {
    this.superHeroService.createHero(hero).subscribe(result => {
      this.heroesUpdated.emit(result);
    })
  }
}
