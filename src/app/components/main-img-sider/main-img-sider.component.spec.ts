import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgSiderComponent } from './main-img-sider.component';

describe('MainImgSiderComponent', () => {
  let component: MainImgSiderComponent;
  let fixture: ComponentFixture<MainImgSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
