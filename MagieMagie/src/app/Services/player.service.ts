import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { 

  }

  getCurrentPlayer(){

    // return this.http.post('http://192.168.110.127:666/login', );
  }
  login (player){

  }

}
