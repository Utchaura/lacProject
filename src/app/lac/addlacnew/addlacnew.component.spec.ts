import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlacnewComponent } from './addlacnew.component';

describe('AddlacnewComponent', () => {
  let component: AddlacnewComponent;
  let fixture: ComponentFixture<AddlacnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlacnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlacnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
