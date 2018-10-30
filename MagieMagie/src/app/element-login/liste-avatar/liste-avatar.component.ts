import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/Services/avatar.service';

@Component({
  selector: 'app-liste-avatar',
  templateUrl: './liste-avatar.component.html',
  styleUrls: ['./liste-avatar.component.scss']
})
export class ListeAvatarComponent implements OnInit {
  private listeAvatar:Avatar[] = [];
  private tmpAvatar:Avatar;
  
  

  constructor(private avatarService:AvatarService) {
    this.tmpAvatar = new Avatar(1,"avatar1");
    this.listeAvatar.push(this.tmpAvatar);
    this.tmpAvatar = new Avatar(2,"avatar2");
    this.listeAvatar.push(this.tmpAvatar);
    this.tmpAvatar = new Avatar(3,"avatar3");
    this.listeAvatar.push(this.tmpAvatar);
    this.tmpAvatar = new Avatar(4,"avatar4");
    this.listeAvatar.push(this.tmpAvatar);
  }

  ngOnInit() {

  }

  getAvatar(){
    this.avatarService.getAvatars().subscribe( avatars =>{
        this.listeAvatar = avatars;
    });
  }



}
