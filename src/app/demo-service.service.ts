import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  public url:string="http://localhost:3000/product/";
  public bill_url:string="http://localhost:3000/bill";
  constructor(public _http:HttpClient) { }
  getAllproduct()
  {
    return this._http.get(this.url);
  }
  getBillDetails()
  {
    return this._http.get(this.bill_url);
  }
}
