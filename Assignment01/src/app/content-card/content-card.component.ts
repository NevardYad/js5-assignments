import { Component, OnInit } from '@angular/core';
import {Content} from '../app.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})


export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

class ContentList {
  // tslint:disable-next-line:variable-name
  private _contentTypes: Content[];
  set contentTypes(value) {
    this._contentTypes = value;
  }
  get contentTypes(): Content[] {
    return this._contentTypes;
  }
  constructor(contentTypes: Content) {
    this._contentTypes = [];
  }
}
