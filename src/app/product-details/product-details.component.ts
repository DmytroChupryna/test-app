import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {productModel} from "../models/product.model";
import {UppdateProductsService} from "../services/uppdate-products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private productId:string = '';

  public product: productModel = new productModel('','','','',0);
  constructor(
      private route: ActivatedRoute,
      private uppdateProductsService_: UppdateProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.productId = params["item"];

      let allProduct = this.uppdateProductsService_.getListData(localStorage.getItem('listProducts'));
      allProduct.map((obj)=>{
        if(obj.link == this.productId){
          this.product = new productModel(obj.title, obj.link, obj.image, obj.description, obj.price );
        }
      })
    });
  }




}
