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


  constructor(private gameService:GameService, 
              private playerService:PlayerService, 
              private router:Router) { 
  
  }

  ngOnInit() {
    this.nomPartie="";
    this.getGamesNotStarted();   
    this.currentPlayer = this.playerService.getCurrentPlayer();

  }

  getGamesNotStarted(){
    this.gameService.getGames().subscribe(games=>{
      this.listeGames = games;
      setTimeout(()=>{
          this.getGamesNotStarted();
      },3000)
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
        let myGame = this.listeGames.filter(patate => patate.id === gameId);
        myGame[0].players.push(player);
        this.playerService.setCurrentPlayer(player);
        this.router.navigate(['/lobby'],{queryParams : {"gameId":gameId}});
        
    });
  }


}
