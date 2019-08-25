import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWayDataBindingComponent } from './to-way-data-binding.component';

describe('ToWayDataBindingComponent', () => {
  let component: ToWayDataBindingComponent;
  let fixture: ComponentFixture<ToWayDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToWayDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
