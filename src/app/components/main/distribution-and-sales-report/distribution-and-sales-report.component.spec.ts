import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionAndSalesReportComponent } from './distribution-and-sales-report.component';

describe('DistributionAndSalesReportComponent', () => {
  let component: DistributionAndSalesReportComponent;
  let fixture: ComponentFixture<DistributionAndSalesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionAndSalesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionAndSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
