import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/Services/avatar.service';
import {Player} from "../../models/player";

@Component({
  selector: 'app-liste-avatar',
  templateUrl: './liste-avatar.component.html',
  styleUrls: ['./liste-avatar.component.scss']
})
export class ListeAvatarComponent implements OnInit {
  private listeAvatar:Avatar[] = [];
  private tmpAvatar:Avatar;
  player  = {
    pseudo: "",
    idAvatar: ""
}




  constructor(private avatarService:AvatarService) {

  }

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar(){
    this.avatarService.getAvatars().subscribe( avatars =>{
        this.listeAvatar = avatars;
    });
  }
  validate(){
    console.log(this.player);


  }



}
