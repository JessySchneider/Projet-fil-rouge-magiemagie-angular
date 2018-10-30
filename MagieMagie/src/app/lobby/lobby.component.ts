import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../Services/player.service';
import { GameService } from '../Services/game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  private gameId;
  private currentGame:Game;
  private isStartable:boolean;

  constructor(private gameService:GameService, 
              private playerService:PlayerService, 
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.getGameState(this.route.snapshot.queryParams['gameId']);
  }

  getGameState(gameId){
    this.gameService.getStateGame(gameId).subscribe( (game:Game) => {
        
        this.currentGame = game;
        
        if(this.currentGame.players.length >= 2){
          this.isStartable = true;
        }else{
          this.isStartable = false;
        }
        setTimeout(()=>{
          this.getGameState(gameId);
      },3000)
    });
  }



}
