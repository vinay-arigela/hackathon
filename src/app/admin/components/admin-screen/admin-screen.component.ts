import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent implements OnInit {

  constructor() { }

  stocks = [
    {
      id: '1',
      name: 'DBS'
    },
    {
      id: '2',
      name: 'JPMC'
      
    },
    {
      id: '3',
      name: 'Amazon'
    },
  ]

  columnDefs: ColDef[] = [
    { field: 'S. No' },
    { field: 'Stock Name' },
    { field: 'Order Qty' },
    { field: 'Order Type' },
    { field: 'Executed Qty' },
    { field: 'Price' },
    { field: 'Order Status' },
    { field: 'Order Date' },
  ]

  rowData = [
    { 'S. No': '1', 'Stock Name': 'DBS', 'Order Qty': '50', 'Order Type': 'Limit', 'Executed Qty': '0', 'Price': '500', 'Order Status': 'PLACED', 'Order Date': '21 Feb 2021' },
    { 'S. No': '2', 'Stock Name': 'DBS', 'Order Qty': '100', 'Order Type': 'Market', 'Executed Qty': '30', 'Price': '500', 'Order Status': 'Executed', 'Order Date': '22 Feb 2021' },
     { 'S. No': '3', 'Stock Name': 'DBS', 'Order Qty': '50', 'Order Type': 'Limit', 'Executed Qty': '0', 'Price': '500', 'Order Status': 'PLACED', 'Order Date': '21 Feb 2021' },
    { 'S. No': '4', 'Stock Name': 'DBS', 'Order Qty': '100', 'Order Type': 'Market', 'Executed Qty': '30', 'Price': '500', 'Order Status': 'Executed', 'Order Date': '22 Feb 2021' }
  ]

  ngOnInit(): void {
  }

  openMarket(): void{

  }

  closeMarket(): void {

  }

  executeOrders(): void {

  }

}
