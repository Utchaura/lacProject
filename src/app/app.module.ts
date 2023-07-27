import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AngularmeterialModule } from './meterial/angularmeterial/angularmeterial.module';
import { AddlacnewComponent } from './lac/addlacnew/addlacnew.component';
import { GetlacReportComponent } from './lac/getlac-report/getlac-report.component';
import { GetlacReportDatewiseComponent } from './lac/getlac-report-datewise/getlac-report-datewise.component';
import { ExportService } from './services/export.service';
import { LoginComponent } from './user/login/login.component';
import { EditlacComponent } from './lac/editlac/editlac.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    AddlacnewComponent,
    GetlacReportComponent,
    GetlacReportDatewiseComponent,
    LoginComponent,
    EditlacComponent,
  ],

  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularmeterialModule,
    FormsModule,
   ReactiveFormsModule,
   ToastrModule.forRoot(),
   HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
