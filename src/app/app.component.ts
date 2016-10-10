import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 10;
  onSwitch() {
    this.switch = !this.switch;
  }
}
