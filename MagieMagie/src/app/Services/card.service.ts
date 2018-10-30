import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  getCard() {
    return this.http.get<Card[]>('http://192.168.110.127:666/cards');

  }

}
