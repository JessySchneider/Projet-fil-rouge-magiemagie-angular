import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { Player } from '../models/player';
import { GameService } from '../Services/game.service';
import { NgForm } from '@angular/forms';
import { ListeAvatarComponent } from '../element-login/liste-avatar/liste-avatar.component';
import { AvatarService } from '../Services/avatar.service';
import { PlayerService } from '../Services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-partie',
  templateUrl: './liste-partie.component.html',
  styleUrls: ['./liste-partie.component.scss']
})
export class ListePartieComponent implements OnInit {

  private listeGames:Game[] = [];
  private nomPartie:string;
  private currentPlayer:Player;
  // listeAvatarComponent = new ListeAvatarComponent(this.avatarService,this.playerService);

  constructor(private gameService:GameService, 
              private avatarService:AvatarService,
              private playerService:PlayerService) { 
  
  }

  ngOnInit() {
    this.nomPartie="";
    this.getGamesNotStarted();
    // this.currentPlayer = this.listeAvatarComponent.getCurrentPlayer();
   
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
    this.gameService.createGame(this.nomPartie).subscribe( (game:Game) =>{
      this.listeGames.push(game);
    });
    form.resetForm();
    
  }

  joinGame(gameId){
    let currentPlayer = this.playerService.getCurrentPlayer();
    this.gameService.joinGame(gameId,currentPlayer._id).subscribe( (player:Player) => {
        this.getGamesNotStarted();
        this.playerService.setCurrentPlayer(player);
        
    });
  }

}
