import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PayBillService {
  // apiUrl = 'https://localhost:3000/editbill'

  constructor(
    private http: HttpClient,
   ) { }

  addpayBill(addPaybill: any) {
    return this.http.post(
      `${environment.baseUrl}` + 'paybill',
      addPaybill
    );
  }
  listbill() {
    return this.http.get<any[]>(`${environment.baseUrl}` + 'listbill');
  }

  // getData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  // updateItem(item: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${item.id}`, item);
  // }

}
