import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsDataComponent } from './downloads-data.component';

describe('DownloadsDataComponent', () => {
  let component: DownloadsDataComponent;
  let fixture: ComponentFixture<DownloadsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
