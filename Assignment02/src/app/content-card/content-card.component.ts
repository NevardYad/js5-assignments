import { Component, OnInit } from '@angular/core';
import {Content} from './content-card-helper';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  content: Content;
  constructor() {
    this.content = {
      id: 1,
      author: 'J.D. Salinger',
      title: 'Catcher In The Rye',
      body: 'Neat book bruh'
    };
    this.content = {
      id: 2,
      author: 'Alan Moore',
      title: 'Watchmen',
      body: 'Sorry bruh'
    };
    this.content = {
      id: 3,
      author: 'Allan Prop',
      title: 'Prop Hunt',
      body: 'BRUUUUH'
    };
  }

  ngOnInit() {
  }




}
