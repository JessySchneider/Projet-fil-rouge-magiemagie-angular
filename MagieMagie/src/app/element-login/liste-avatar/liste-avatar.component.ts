import { Component, OnInit } from '@angular/core';

class Product {
}

@Component({
  selector: 'app-liste-avatar',
  templateUrl: './liste-avatar.component.html',
  styleUrls: ['./liste-avatar.component.scss']
})
export class ListeAvatarComponent implements OnInit {
  products: Product[];
  constructor() {

  }

  ngOnInit() {

  }

}
