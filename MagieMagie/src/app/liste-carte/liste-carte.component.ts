import { Component, OnInit } from '@angular/core';
import {Card} from "../models/card";
import {CardService} from "../Services/card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-carte',
  templateUrl: './liste-carte.component.html',
  styleUrls: ['./liste-carte.component.scss']
})
export class ListeCarteComponent implements OnInit {
  listeCarte:Card[] = [];

  constructor(private cardService:CardService,private router:Router) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(){
    this.cardService.getCard().subscribe( cards =>{
      this.listeCarte = cards;
      console.log(this.listeCarte);
    });
  }

}
