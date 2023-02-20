import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LoansComponent } from './loans/loans.component';
import { NpsComponent } from './nps/nps.component';
import { OpsComponent } from './ops/ops.component';
import { ReportsComponent } from './reports/reports.component';
import { SavedComponent } from './saved/saved.component';
import { RegularPayBillComponent } from './regularPayBill/regularPayBill.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NgxPrintModule } from 'ngx-print';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MenuComponent,
    LoansComponent,
    NpsComponent,
    OpsComponent,
    ReportsComponent,
    SavedComponent,
    RegularPayBillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    NgxPrintModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    SweetAlert2Module.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
