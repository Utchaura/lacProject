import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  result:any;

  constructor(
    private formBuilder: FormBuilder, // Corrected: Added private access modifier
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  )
  //using for session clear
  {
    sessionStorage.clear();
  }

  ngOnInit(): void {
    debugger;
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

//login click
  proceedlogin() {
    if (this.loginForm.valid) {
      this.service.GetUserbyCode(this.loginForm.value.id).subscribe(item => {
        this.result = item;                                            // Corrected: Declare 'result' variable with any type
        if (this.result.password === this.loginForm.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username', this.result.id);
            this.toastr.success('Sucessfully login')
            this.router.navigate(['/dashboard']);
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
