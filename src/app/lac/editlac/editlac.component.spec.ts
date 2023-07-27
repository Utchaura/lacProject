import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlacComponent } from './editlac.component';

describe('EditlacComponent', () => {
  let component: EditlacComponent;
  let fixture: ComponentFixture<EditlacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlacComponent]
    });
    fixture = TestBed.createComponent(EditlacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
