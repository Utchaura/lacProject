
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { GetlacReportComponent } from './lac/getlac-report/getlac-report.component';
import { GetlacReportDatewiseComponent } from './lac/getlac-report-datewise/getlac-report-datewise.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService } from './services/guard/auth.guard.service';
import { EditlacComponent } from './lac/editlac/editlac.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'get-report',component:GetlacReportComponent,canActivate:[AuthGuardService]},
  {path:'edit',component:EditlacComponent,canActivate:[AuthGuardService]},
  {path:'get-report-datewise',component:GetlacReportDatewiseComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
