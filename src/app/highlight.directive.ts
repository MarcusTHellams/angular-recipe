import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseOver(){
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseout') mouseLeave(){
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('rbHighlight') highlightColor = 'green';
  private backgroundColor: string;
  constructor() {
      // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
   }
    ngOnInit(){
      this.backgroundColor = this.defaultColor;
    }
}
