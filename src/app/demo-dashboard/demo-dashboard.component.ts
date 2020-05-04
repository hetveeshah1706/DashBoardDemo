import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DemoServiceService } from '../demo-service.service';

class model {
  constructor(public kind: string, public share: number) {}
}

@Component({
  selector: 'app-demo-dashboard',
  templateUrl: './demo-dashboard.component.html',
  styleUrls: ['./demo-dashboard.component.css'],
})
export class DemoDashboardComponent implements OnInit {
  constructor(public _data: DemoServiceService) {}
  public product_data: any[];
  public bill_data: any[];
  public bill_data_display: any[] = [];
  public bill_data_name_display: any[] = [];
  public data: model[] = [];
  public labelContent(e: any): string {
    return e.category;
  }

  ngOnInit() {
    this._data.getAllproduct().subscribe((data1: any[]) => {
      this.product_data = data1;
      console.log(this.product_data);
      for (let i = 0; i < data1.length; i++) {
        this.data.push(
          new model(
            this.product_data[i].pro_name,
            this.product_data[i].pro_price
          )
        );
      }
    });
    this._data.getBillDetails().subscribe((data1: any[]) => {
      this.bill_data = data1;
      for (let i = 0; i < data1.length; i++) {
        this.bill_data_display.push(this.bill_data[i].bill_amount);
        this.bill_data_name_display.push(this.bill_data[i].customer_name);
      }
      console.log(this.bill_data_display);
    });
  }
}
