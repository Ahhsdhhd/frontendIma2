import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayBillService } from '../services/pay-bill.service';
 import Swal from 'sweetalert2';
 import { Location } from '@angular/common';
 import jsPDF from 'jspdf';
 import * as jspdfAutotable from 'jspdf-autotable';



@Component({
  selector: 'app-regularPayBill',
  templateUrl: './regularPayBill.component.html',
  styleUrls: ['./regularPayBill.component.css']
})
export class RegularPayBillComponent implements OnInit {

  @ViewChild('myTable')
  table!: ElementRef;

  addPaybill: any;
  listpaybill: any;
 

 
  constructor(
    private routes: Router,

    private fb: FormBuilder,
    private paybillService:PayBillService,
    private location: Location,
 
  ) {
    this.addPaybill = fb.group({

      year: ["", Validators.required],
      month: ["", Validators.required],
      type: ["", Validators.required],
      imaNo: ["", Validators.required],
      degn: ["", Validators.required],
      name: ["", Validators.required],
      dob: ["", Validators.required],
      bp: ["", Validators.required],
      pp: ["", Validators.required],
      gp: ["", Validators.required],
      da: ["", Validators.required],
      hra: ["", Validators.required],
      hca: ["", Validators.required],
      tpa: ["", Validators.required],
      tpa_da: ["", Validators.required],
      wa: ["", Validators.required],
      arr: ["", Validators.required],
      misc1: ["", Validators.required],
      grossPay: ["", Validators.required],
      gpfSubs: ["", Validators.required],
      gpfRec: ["", Validators.required],
      fa: ["", Validators.required],
      cgeis: ["", Validators.required],
      rent: ["", Validators.required],
      misc2: ["", Validators.required],
      eol: ["", Validators.required],
      netPay: ["", Validators.required],
      remark: ["", Validators.required]
    });
  }

  ngOnInit() {
this.listbill();
  }


// onSubmit(){
//   console.log(this.addPaybill.value);
//   this.paybillService.addpayBill(this.addPaybill.value).subscribe((data:any)=>{

 
// })
//   }
  listbill() {
    this.paybillService.listbill().subscribe((data: any[]) => {
  
      this.listpaybill = data ;
      console.log("apiData " + JSON.stringify(this.listpaybill))
    });
  }
  onSubmit() {
   

    Swal.fire({
      title: 'Do you want to add ?',
      text: 'Add.',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked the "Yes, save it!" button
        // Perform the delete operation here
        this.paybillService.addpayBill(this.addPaybill.value).subscribe((data:any)=>{

        
          this.location.go(this.location.path());
          window.location.reload();
        })
      }else if (result.dismiss === Swal.DismissReason.cancel) {
        // Cancel the deletion
     
      }
    });
}
downloadPDF() {
  const doc = new jsPDF();
  const table = this.table.nativeElement;
  const tableContent = table.outerHTML.replace(/id=\"|class=\"/gi, '');

  // Enable CSS styling
  const style = `
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid black;
      }
      th, td {
        border: 1px solid black;
        padding: 0.5em;
      }
    </style>
  `;

  doc.html(style + tableContent, {
  
    callback: () => {
      doc.save('table.pdf');
    }
  });
}

 
}






 
