import { Component, OnInit } from '@angular/core';
import {UppdateProductsService} from "../services/uppdate-products.service";
import {Subscription} from "rxjs";
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
      private UppdateProductsService_ : UppdateProductsService,
  ) { }

  private sub: Subscription;
  public mess: boolean = false;

  ngOnInit() {

    let this_ = this;
    this_.sub = this.UppdateProductsService_
        .getStateAddProduct()
        .subscribe((data)=>{
          if(data){
            this_.mess = true;
            setTimeout(()=>{
              this_.mess = false;
            },3000)
          }
        });



  }





}
