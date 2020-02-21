import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'plate-unstyled-button',
  templateUrl: './unstyled-button.component.html',
  styleUrls: ['./unstyled-button.component.scss']
})
export class UnstyledButtonComponent {
  @Input() ariaLabel: string;
  @Output() clickButton: EventEmitter<Event> = new EventEmitter();

  onCLick($event: Event) {
    this.clickButton.emit($event);
  }
}
