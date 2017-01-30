import { Directive, Input, HostBinding, HostListener, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[rbCollapse]'
})
export class CollapseDirective {

  constructor(/*private tempRef: TemplateRef<any>, private viewCont: ViewContainerRef*/) {
    // console.log(this.viewCont.length);
  }
  private defaultColor: string = 'yellow';
  private height: string = '500px';
  private goOrNo;

  @Input('rbCollapse') set setMaze(goOrNo: boolean) {
    
    this.goOrNo = goOrNo;
    console.log(typeof this.goOrNo);
  }

  @HostBinding('style.height') private get getHeight() {
    return this.height;
  };

  @HostBinding('style.cursor') private pointer: string = 'pointer';

  @HostBinding('style.backgroundColor') private bgColor: string = this.defaultColor;
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded') private isExpanded: boolean = true;

  @HostListener('click') onClick() {
    this.bgColor = 'red';
  }








}
