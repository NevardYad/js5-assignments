import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';

import {ContentListComponent} from '../content-list/content-list.component';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  @Input() inputContent: Content;
  constructor() {
  }

  ngOnInit() {
  }
}


