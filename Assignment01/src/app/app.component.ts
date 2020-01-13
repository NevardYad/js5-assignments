import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'JsAssignment 01';
}

export interface Content {
  id: number;
  author: string;
  imgURL?: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}
