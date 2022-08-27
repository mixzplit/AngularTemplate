import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdeletesComponent } from './productsdeletes.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProductsdeletesComponent', () => {
  let component: ProductsdeletesComponent;
  let fixture: ComponentFixture<ProductsdeletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdeletesComponent ],
      imports: [ReactiveFormsModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsdeletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should have as title 'Articulos Eliminados WOE'`, () =>{
    expect(component.title).toEqual('Articulos Eliminados WOE');
  });

  it(`Should have a variable called "response" with value {} as default`, () => {
    expect(component.response).toBeTruthy();
    expect(component.response).toEqual({});
  })

});
