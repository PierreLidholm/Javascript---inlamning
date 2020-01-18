import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalordersComponent } from './totalorders.component';

describe('TotalordersComponent', () => {
  let component: TotalordersComponent;
  let fixture: ComponentFixture<TotalordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
