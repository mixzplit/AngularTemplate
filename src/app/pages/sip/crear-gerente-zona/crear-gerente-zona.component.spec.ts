import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGerenteZonaComponent } from './crear-gerente-zona.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CrearGerenteZonaComponent', () => {
  let component: CrearGerenteZonaComponent;
  let fixture: ComponentFixture<CrearGerenteZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearGerenteZonaComponent ],
      imports: [ReactiveFormsModule, HttpClientModule]
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
