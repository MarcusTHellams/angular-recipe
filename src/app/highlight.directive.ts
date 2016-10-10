import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseOver(){
    this.backgroundColor = 'green';
  };
  @HostListener('mouseout') mouseLeave(){
    this.backgroundColor = 'white';
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor = 'white';
  constructor() {
      // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
   }

}
