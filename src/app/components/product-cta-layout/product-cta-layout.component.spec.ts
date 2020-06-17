import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCtaLayoutComponent } from './product-cta-layout.component';

describe('ProductCtaLayoutComponent', () => {
  let component: ProductCtaLayoutComponent;
  let fixture: ComponentFixture<ProductCtaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCtaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCtaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
