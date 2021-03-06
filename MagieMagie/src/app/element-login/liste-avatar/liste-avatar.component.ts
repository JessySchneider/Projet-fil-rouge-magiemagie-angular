import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/Services/avatar.service';
import {Player} from "../../models/player";
import {NgForm} from "@angular/forms";
import {PlayerService} from "../../Services/player.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-avatar',
  templateUrl: './liste-avatar.component.html',
  styleUrls: ['./liste-avatar.component.scss']
})
export class ListeAvatarComponent implements OnInit {
  listeAvatar:Avatar[] = [];
   player  = {
    pseudo: "",
    idAvatar: ""
}
private currentPlayer:Player;

  constructor(private avatarService:AvatarService,private playerService:PlayerService , private router:Router) {

}

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar(){
    this.avatarService.getAvatars().subscribe( avatars =>{
      this.listeAvatar = avatars;
    });
  }

  
  login (){
    this.playerService.login(this.player).subscribe((player:Player) =>{
      this.currentPlayer = player;
      this.playerService.setCurrentPlayer(player);
      this.router.navigate(['/liste-partie']);
    });

  }

 


}
