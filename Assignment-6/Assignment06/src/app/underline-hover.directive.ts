import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
@Directive({
  selector: '[appUnderlineHover]'
})
export class UnderlineHoverDirective implements OnInit{
  @Input () deco: string;
  constructor(private elm: ElementRef) {
  }
  @HostListener('mouseenter') mouseEnter() {
    this.textChange(this.deco);
  }
  @HostListener('mouseleave') mouseLeave() {
    this.textChange('none');
  }
  private textChange(txtChange) {
    if (this.elm.nativeElement.className === 'cartoon-name') {
      this.elm.nativeElement.style.textDecoration = txtChange || 'underline';
    }
    if (this.elm.nativeElement.className === 'cartoon-tags') {
      this.elm.nativeElement.style = txtChange || 'font-weight:900';
    }
    if (this.elm.nativeElement.className === 'cartoon-card-wrapper' && this.elm.nativeElement.id === 'Kids') {
      this.elm.nativeElement.style.boxShadow = txtChange || '0px 0px 90px 10px #228B22';
    }
    if (this.elm.nativeElement.className === 'cartoon-card-wrapper' && this.elm.nativeElement.id === 'Teens') {
      this.elm.nativeElement.style.boxShadow = txtChange || '0px 0px 90px 10px #1e90ff';
    }
    if (this.elm.nativeElement.className === 'cartoon-card-wrapper' && this.elm.nativeElement.id === 'Adult') {
      this.elm.nativeElement.style.boxShadow = txtChange || '0px 0px 90px 10px #ff0000';
    }
  }
  ngOnInit(): void {

  }

}
