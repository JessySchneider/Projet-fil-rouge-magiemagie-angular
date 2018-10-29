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
  constructor(private avatarService:AvatarService) {

  }

  ngOnInit() {

  }

  getAvatar(){
    this.avatarService.getAvatars().subscribe( avatars =>{
        this.listeAvatar = avatars;
    });
  }



}
