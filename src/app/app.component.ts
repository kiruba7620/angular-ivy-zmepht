import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input()
  name: any = 'Angular ' + VERSION.major;
  show: boolean =true;
  onChange() {
    console.log('onChange');
  }
  onInIt() {
    console.log('component initialized');
  }
  onDestroyed() {
    console.log(new Date());
  }
  toggle() {
    this.show = !this.show;
  }
}
