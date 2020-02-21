import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'plate-unstyled-button',
    templateUrl: './unstyled-button.component.html',
    styleUrls: ['./unstyled-button.component.scss']
})
export class UnstyledButtonComponent {
    @Input() ariaLabel: string;
    @Input() buttonName: string;
    @Input() buttonType: 'submit' | 'reset' | 'button' = 'button';
    @Input() isDisabled: boolean;
    @Input() disableOutline: boolean;
    @Output() clickButton: EventEmitter<Event> = new EventEmitter();

    onCLick($event: Event) {
        this.clickButton.emit($event);
    }
}
