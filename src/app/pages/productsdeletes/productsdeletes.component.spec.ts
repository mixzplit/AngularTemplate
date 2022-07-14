import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdeletesComponent } from './productsdeletes.component';

describe('ProductsdeletesComponent', () => {
  let component: ProductsdeletesComponent;
  let fixture: ComponentFixture<ProductsdeletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdeletesComponent ]
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
});
