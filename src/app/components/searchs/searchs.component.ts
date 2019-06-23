import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent  {
  heroes:any = {};
  term:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) 
    { 
      this.activatedRoute.params.subscribe( params => {
        this.term = params['term'];
        this.heroes = _heroeService.lookingforHeroe(params['term']);
        console.log(this.heroes);  
      })
    }
}
