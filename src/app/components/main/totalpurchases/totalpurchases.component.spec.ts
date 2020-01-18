import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpurchasesComponent } from './totalpurchases.component';

describe('TotalpurchasesComponent', () => {
  let component: TotalpurchasesComponent;
  let fixture: ComponentFixture<TotalpurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalpurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
