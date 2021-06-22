import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { orders } from './Model/order.model';
import { OrderService } from './Services/order.services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  formValue !: FormGroup;
  orderObj: orders = new orders();
  ordersList !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      orderNo: [''],
      orderDueDate: [''],
      customerName: [''],
      email: [''],
      mobileNo: [''],
      address: [''],
    })
    this.getAllOrderDetails();
  }
  clickAddOrder(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  saveOrderDetails() {
    this.orderObj.orderNo = this.formValue.value.orderNo;
    this.orderObj.orderDueDate = this.formValue.value.orderDueDate;
    this.orderObj.customerName = this.formValue.value.customerName;
    this.orderObj.email = this.formValue.value.email;
    this.orderObj.mobileNo = this.formValue.value.mobileNo;
    this.orderObj.address = this.formValue.value.address;

    this.orderService.addOrder(this.orderObj)
      .subscribe(response => {
        console.log(response);
        alert("Records Save Sucessfully");
        let ref = document.getElementById('cancel')
        response.click();
        this.formValue.reset();
        this.getAllOrderDetails();
      },
        err => {
          alert("An Error has occured please try again after some time ")
        })
  }
  getAllOrderDetails() {
    this.orderService.getOrder()
      .subscribe(response => {
        this.ordersList = response;
      })
  }
  deleteRecord(item: any) {
    if(confirm("Would you like to delete?")) {
      this.orderService.deleteOrder(item.id)
      .subscribe(response => {
        alert("Data Deleted Sucessfully");
        this.getAllOrderDetails();
      })
    }
  }
  editRecord(item: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.orderObj.id = item.id;
    this.formValue.controls['orderNo'].setValue(item.orderNo);
    this.formValue.controls['orderDueDate'].setValue(item.orderDueDate);
    this.formValue.controls['customerName'].setValue(item.customerName);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['mobileNo'].setValue(item.mobileNo);
    this.formValue.controls['address'].setValue(item.address);
  }
  updateOrderDetails() {
    this.orderObj.orderNo = this.formValue.value.orderNo;
    this.orderObj.orderDueDate = this.formValue.value.orderDueDate;
    this.orderObj.customerName = this.formValue.value.customerName;
    this.orderObj.email = this.formValue.value.email;
    this.orderObj.mobileNo = this.formValue.value.mobileNo;
    this.orderObj.address = this.formValue.value.address;

    this.orderService.updateOrder(this.orderObj, this.orderObj.id)
      .subscribe(response => {
        alert("Record Updated Sucessfully");
        let ref = document.getElementById('cancel')
        response.click();
        this.formValue.reset();
        this.getAllOrderDetails();
      })
  }
}
