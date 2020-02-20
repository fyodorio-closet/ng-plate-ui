import { Component } from '@angular/core';

@Component({
  selector: 'plate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-plate-ui';

  clickButton($event: Event) {
    console.log($event);
  }
}
