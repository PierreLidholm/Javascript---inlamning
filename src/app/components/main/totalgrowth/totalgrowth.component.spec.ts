import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalgrowthComponent } from './totalgrowth.component';

describe('TotalgrowthComponent', () => {
  let component: TotalgrowthComponent;
  let fixture: ComponentFixture<TotalgrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalgrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalgrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
