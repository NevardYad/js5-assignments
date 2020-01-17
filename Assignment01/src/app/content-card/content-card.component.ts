import { Component, OnInit } from '@angular/core';

export interface Content {
  id: number;
  author: string;
  imgURL?: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}

class ContentList {
  private _items: Content[];
  static contentCount = 0;
  constructor(item: Content){
    this._items = [];
    this._items[ContentList.contentCount] = item;
    ContentList.increaseCount();
  }
  get items(): Content[]{
    return this._items;
  }

  public add(i){
    this._items.push(i);
  }
  static increaseCount(){
    return ++ContentList.contentCount;
  }

}
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  content: Content;
  cList: ContentList;
  constructor() {
    this.content = {
      id:1,
      author: "J.D. Salinger",
      title: "Catcher In The Rye",
      body: "Neat book bruh"
    };
    this.cList = new ContentList(this.content);
    console.log(this.cList[0]);
    this.content = {
      id: 2,
      author: "Alan Moore",
      title: "Watchmen",
      body: "Sorry bruh"
    };
    this.cList.add(this.content);

    this.content = {
      id: 3,
      author: "Allan Prop",
      title: "Prop Hunt",
      body: "BRUUUUH"
    };
    this.cList.add(this.content);
    console.log(this.cList.items[0]);
  }

  ngOnInit():void {
    console.log(this.cList.items);

  }




}
