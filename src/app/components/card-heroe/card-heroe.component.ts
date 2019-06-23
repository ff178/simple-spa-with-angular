import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {
  
  @Input() heroe:any = {};
  @Input() i:number;

  constructor( private router:Router

  ) { }

  ngOnInit() {
  }
  lookHeroe(i){
    this.router.navigate(['/heroe', i]);
  }

}
