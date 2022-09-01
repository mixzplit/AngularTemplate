import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasWebOnliveComponent } from './altas-web-onlive.component';

describe('AltasWebOnliveComponent', () => {
  let component: AltasWebOnliveComponent;
  let fixture: ComponentFixture<AltasWebOnliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasWebOnliveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltasWebOnliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
