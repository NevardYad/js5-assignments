import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Content } from '../content-card/content-helper';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  constructor() {}
  @Input() statingId;
  @Output() newShowEvent = new EventEmitter<Content>();

  newShowItem: Content;
  currentId: number;
  IntendAudi = ['Kids', 'Teens', 'Adult'];

  onSubmit(it: NgForm) {
    console.log(it.value);
    this.addShow(it.value.title, it.value.creator, it.value.body, it.value.imgUrl, it.value.intendAudi);
    it.reset();
  }

  ngOnInit() {
    this.currentId = this.statingId;
  }

  addShow(
    title: string,
    creator: string,
    body: string,
    imgUrl: string,
    intendAudi: string
  ): void {
    this.newShowItem = {
      id: this.currentId,
      title,
      creator,
      body,
      intendAudi,
      imgUrl
    };

    // @ts-ignore
    this.currentId++;
    console.log('New Id:' + this.currentId);
    console.log('title:' + title);
    console.log('Maker:' + creator);
    console.log('Synp:' + body);
    console.log('img:' + imgUrl);
    console.log('made for:' + intendAudi);
    console.log('New Id:' + this.currentId);
    allShows();
    this.newShowEvent.emit(this.newShowItem);
  }

}


const newShow = async function() {
  return 'OK';
};

const NewShow = function () {
  return Promise.resolve('Done');
}

const allShows = async () => {
  const dokie = await NewShow();

  return dokie;
}
const  showPromise = new Promise((success, fail) => {
  const testpass = true;
  if (testpass) {
    success('Success');
  } else {
    fail('Failure: (');
  }
});


