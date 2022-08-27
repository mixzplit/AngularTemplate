import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGerentesZonaComponent } from './listar-gerentes-zona.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

describe('ListarGerentesZonaComponent', () => {
  let component: ListarGerentesZonaComponent;
  let fixture: ComponentFixture<ListarGerentesZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGerentesZonaComponent ],
      imports: [DataTablesModule, HttpClientModule]
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
