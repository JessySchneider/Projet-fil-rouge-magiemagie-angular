import { Injectable } from '@angular/core';
import { Avatar } from '../models/avatar';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http:HttpClient) { }

  getAvatars() {
    return this.http.get<Avatar[]>('http://192.168.110.127:666/avatars');
     
  }






}


