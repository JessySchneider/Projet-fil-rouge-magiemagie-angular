import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http:HttpClient) { 
  
  }

 

  getGames() {

    return this.http.get<Game[]>('http://192.168.110.127:666/games/not-started');
  }

  createGame(nomPartie){
    let game = new Game(nomPartie);
    return this.http.post('http://192.168.110.127:666/games',game);
  }

  joinGame(gameId,playerId){
    return this.http.post('http://192.168.110.127:666/games/'+gameId+'/join/'+playerId,{});
  }

  getStateGame(gameId){
    return this.http.get('http://192.168.110.127:666/games/'+gameId);
  }

  startGame(gameId){
    return this.http.post('http://192.168.110.127:666/games/'+gameId+'/start',{});
  }

  getCurrentStateGame(gameId, playerId){
    return this.http.get('http://192.168.110.127:666/games/'+gameId+'/state/'+playerId);
  }

}
