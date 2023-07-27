import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlacReportComponent } from './getlac-report.component';

describe('GetlacReportComponent', () => {
  let component: GetlacReportComponent;
  let fixture: ComponentFixture<GetlacReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlacReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlacReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
