import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { Player } from '../models/player';
import { GameService } from '../Services/game.service';

@Component({
  selector: 'app-liste-partie',
  templateUrl: './liste-partie.component.html',
  styleUrls: ['./liste-partie.component.scss']
})
export class ListePartieComponent implements OnInit {

  private listeGames:Game[] = [];
  private listePlayer:Player[];

  constructor(private gameService:GameService) { 

  }

  ngOnInit() {
    this.getGamesNotStarted();
   
  }

  getGamesNotStarted(){
    this.gameService.getGames()
    .subscribe(game=>{
        this.listeGames = game;
    });
   
  }

}
