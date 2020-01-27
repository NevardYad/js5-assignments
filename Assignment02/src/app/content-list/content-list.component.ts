import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {


  contentArray: Content[];
  constructor() {
    this.contentArray = [];
    this.contentArray[0] = {
      id: 1,
      author: 'Kyle Higgins',
      title: 'Mighty Morphin Power Rangers: Shattered Grid',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/81TWNHZKR%2BL.jpg',
      body: 'Lord Drakkon, the evil alternate-universe Tommy Oliver with both the Green and White Ranger powers.'
    };
    this.contentArray[1] = {
      id: 2,
      author: 'Alan Moore',
      title: 'Watchmen',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/71sk6D43yaL.jpg',
      body: 'Considered the greatest graphic novel in the history of the medium.'
    };
    this.contentArray[2] = {
      id: 3,
      author: 'Simon Spurrier',
      title: 'The Power of the Dark Crystal Vol. 1',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/81vF74K38WL.jpg',
      body: 'An official sequel to Jim Henson’s cult classic fantasy film The Dark Crystal.'
    };
    this.contentArray[3] = {
      id: 4,
      author: 'Chris Claremount',
      title: 'X-Men: The Dark Phoenix Saga ',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/91xIim2fXBL.jpg',
      body: 'Collects Uncanny X-Men (1963) #129-137.'
    };
    this.contentArray[4] = {
      id: 5,
      author: 'Hirohiko Araki',
      title: 'JoJo\'s Bizarre Adventure: Part 2--Battle Tendency, Vol. 1 ',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51wK-GoSqFL.jpg',
      body: 'JoJo’s Bizarre Adventure is a groundbreaking manga famous for its outlandish characters, wild humor and frenetic battles.'
    };
  }

  ngOnInit() {
  }

}
