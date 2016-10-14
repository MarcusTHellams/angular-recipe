import { Component, OnInit, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'rb-animate',
  templateUrl: './animate.component.html',
  styles: [`
    .toggle-container {
      background-color:white;
      border:10px solid black;
      width:200px;
      text-align:center;
      line-height:100px;
      font-size:50px;
      box-sizing:border-box;
      overflow:hidden;
    }
  `],
  animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({ height: '0px', color: 'maroon', borderColor: 'maroon' })),
      state('expanded', style({ height: '*', borderColor: 'green', color: 'green' })),
      transition(
        'collapsed <=> expanded', [animate(500, style({ height: '250px' })), animate(500)])
    ])]
})
export class AnimateComponent implements OnInit {

  stateExpression: string;
  constructor() { this.collapse(); }
  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }

  ngOnInit() {
  }

}
