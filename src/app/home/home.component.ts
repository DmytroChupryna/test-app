import { Component, OnInit } from '@angular/core';
import {productModel} from "../models/product.model";
import {UppdateProductsService} from "../services/uppdate-products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listData: productModel[] = [];
  constructor(
      private uppdateProductsService_:UppdateProductsService
  ) { }
  ngOnInit() {
    this.listData = this.uppdateProductsService_.getListData(localStorage.getItem('listProducts'));
  }

}
