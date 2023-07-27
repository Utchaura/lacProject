import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LacService } from 'src/app/services/lac.service';

@Component({
  selector: 'app-addlacnew',
  templateUrl: './addlacnew.component.html',
  styleUrls: ['./addlacnew.component.scss']
})
export class AddlacnewComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private lacservice:LacService, private toastr: ToastrService,
  private router: Router) {
    
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      original_amount: ['', [Validators.required, this.nonNegativeValidator]],
      village: ['', Validators.required],
      notification_S4: ['', Validators.required],
      notification_S6: ['', Validators.required],
      award_date: [null, Validators.required],
      original_amount_of_Lac: [null, Validators.required],
      detail: ['', Validators.required],
      khasra: ['', Validators.required],
      receipt_date: [null, Validators.required],
      application_lac: ['', Validators.required],
      adj_count_date: [null, Validators.required],
      High_Court_RFA_order_No: ['', Validators.required],
      filed_by_state: [null, Validators.required],
      date_relied: [null, Validators.required],
      compensation_paid: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //not take negative value
    nonNegativeValidator(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      if (value < 0) {
        return { nonNegative: true };
      }
      return null;
    }


  onFormSubmit(): void {
    if (this.form.valid) {

      console.log(this.form.value);
    } else {
      // If the form is invalid, mark all form fields as touched to display validation errors
      this.markFormGroupAsTouched(this.form);
    }
  }

  // Helper function to mark all form controls as touched
  markFormGroupAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }

}
