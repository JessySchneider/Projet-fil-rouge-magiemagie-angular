import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../Services/player.service';
import { GameService } from '../Services/game.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(private gameService:GameService, 
              private playerService:PlayerService, 
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
     console.log(this.route.snapshot.queryParams);
  }



}
