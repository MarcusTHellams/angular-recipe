import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
   }

}
