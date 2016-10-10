import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private switch = true;
  onSwitch(){
    this.switch = !this.switch;
  }
}
