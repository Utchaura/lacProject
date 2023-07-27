import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlacReportDatewiseComponent } from './getlac-report-datewise.component';

describe('GetlacReportDatewiseComponent', () => {
  let component: GetlacReportDatewiseComponent;
  let fixture: ComponentFixture<GetlacReportDatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlacReportDatewiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlacReportDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
