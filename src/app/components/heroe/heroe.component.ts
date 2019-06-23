import { Component  } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  
  heroe:any = {};
  house:string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService) {
    
    this.activatedRoute.params.subscribe( params => {
      
      this.heroe = _heroeService.getHeroe(params['id']);

    })
    this.house = `./../../assets/img/${this.heroe.casa}.png`;
  }
}
