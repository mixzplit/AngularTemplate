import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGerentesZonaComponent } from './listar-gerentes-zona.component';

describe('ListarGerentesZonaComponent', () => {
  let component: ListarGerentesZonaComponent;
  let fixture: ComponentFixture<ListarGerentesZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGerentesZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGerentesZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
