import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private currentPlayer;
  constructor(private http:HttpClient) { 

  }


  login (player){
     return this.currentPlayer = this.http.post('http://192.168.110.127:666/login',player );
  }

  setCurrentPlayer(player:Player){
    this.currentPlayer = player;
  }

  getCurrentPlayer(){

    return this.currentPlayer;
  }
}
