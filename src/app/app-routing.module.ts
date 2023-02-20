import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RegularPayBillComponent } from './regularPayBill/regularPayBill.component';
import { NpsComponent } from './nps/nps.component';
import { OpsComponent } from './ops/ops.component';
import { ReportsComponent } from './reports/reports.component';
import { SavedComponent } from './saved/saved.component';
import { LoginComponent } from './login/login.component';

import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  
  {path:'menu',component:MenuComponent},
  {path:'payBill',component:RegularPayBillComponent},
  {path:'Nps',component:NpsComponent},
  {path:'Ops',component:OpsComponent},
  {path:'Reports',component:ReportsComponent},
  {path:'Saved',component:SavedComponent},
  {path:'Admin',component:MenuComponent},
  {path:'Loans',component:LoansComponent},
  {path:'login',component:LoginComponent},
  { path: '**', component:MenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
