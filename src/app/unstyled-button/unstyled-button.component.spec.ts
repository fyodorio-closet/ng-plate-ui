import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstyledButtonComponent } from './unstyled-button.component';

describe('UnstyledButtonComponent', () => {
    let component: UnstyledButtonComponent;
    let fixture: ComponentFixture<UnstyledButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UnstyledButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UnstyledButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
