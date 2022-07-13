import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGerenteZonaComponent } from './crear-gerente-zona.component';

describe('CrearGerenteZonaComponent', () => {
  let component: CrearGerenteZonaComponent;
  let fixture: ComponentFixture<CrearGerenteZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearGerenteZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGerenteZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
