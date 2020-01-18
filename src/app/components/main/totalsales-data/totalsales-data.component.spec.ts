import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsalesDataComponent } from './totalsales-data.component';

describe('TotalsalesDataComponent', () => {
  let component: TotalsalesDataComponent;
  let fixture: ComponentFixture<TotalsalesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsalesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsalesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
