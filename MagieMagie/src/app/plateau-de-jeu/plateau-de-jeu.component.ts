import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { GameService } from '../Services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../Services/player.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-plateau-de-jeu',
  templateUrl: './plateau-de-jeu.component.html',
  styleUrls: ['./plateau-de-jeu.component.scss']
})
export class PlateauDeJeuComponent implements OnInit {

  private listePlayer:Player[];

  constructor(private gameService:GameService, 
                private playerService:PlayerService,
                private router:Router,
                private route:ActivatedRoute) { }

  ngOnInit() {
    this.getCurrentGameState(this.route.snapshot.queryParams['gameId']);
  }

  getCurrentGameState(gameId){
    let currentPlayer = this.playerService.getCurrentPlayer();
    let playerId = currentPlayer._id;
    this.gameService.getCurrentStateGame(gameId,playerId).subscribe( (game:Game) => {
      
       this.listePlayer = game.players;
       console.log(this.listePlayer);
      //   setTimeout(()=>{
      //     this.getCurrentGameState(gameId);
      // },30000)
    });
  }

}
