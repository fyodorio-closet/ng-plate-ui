import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonConfig } from './unstyled-button-config.model';

@Component({
    selector: 'plate-unstyled-button',
    templateUrl: './unstyled-button.component.html',
    styleUrls: ['./unstyled-button.component.scss']
})
export class UnstyledButtonComponent {
    @Input() buttonConfig: ButtonConfig;
    @Output() clickButton: EventEmitter<Event> = new EventEmitter();

    onCLick($event: Event) {
        this.clickButton.emit($event);
    }
}
