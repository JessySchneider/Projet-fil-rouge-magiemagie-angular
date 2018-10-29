import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { Player } from '../models/player';
import { GameService } from '../Services/game.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liste-partie',
  templateUrl: './liste-partie.component.html',
  styleUrls: ['./liste-partie.component.scss']
})
export class ListePartieComponent implements OnInit {

  private listeGames:Game[] = [];
  private nomPartie:string;

  constructor(private gameService:GameService) { 
  
  }

  ngOnInit() {
    this.nomPartie="";
    this.getGamesNotStarted();
   
  }

  getGamesNotStarted(){
    this.gameService.getGames().subscribe(games=>{
      games.forEach(game => { 
        if(!game.isStarted){
          this.listeGames.push(game);
        }
       
      }) 
    });
   
  }

  createGame(form:NgForm){
    this.gameService.createGame(this.nomPartie).subscribe(_=>{
      this.getGamesNotStarted();
    });
    form.resetForm();
    
  }

}
