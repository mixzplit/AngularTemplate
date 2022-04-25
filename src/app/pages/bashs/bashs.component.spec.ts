import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BashsComponent } from './bashs.component';

describe('BashsComponent', () => {
  let component: BashsComponent;
  let fixture: ComponentFixture<BashsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BashsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BashsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
