import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerPopupComponent } from './datepicker-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('DatepickerPopupComponent', () => {
  let component: DatepickerPopupComponent;
  let fixture: ComponentFixture<DatepickerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerPopupComponent ],
      imports: [NgbModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
