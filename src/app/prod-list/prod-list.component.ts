import {Component, OnInit, Input} from '@angular/core';
import {productModel} from "../models/product.model";

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  @Input() listProducts: productModel[] = [];

  public confirmation: boolean = false;
  private bufferIndex: number;
  constructor() {}
  ngOnInit() {}
  removeElementFromList(event){
    this.confirmation = true;
    this.bufferIndex = event;
  }
  confirmDelete(res:boolean){
    if(res){
      this.listProducts.splice(this.bufferIndex,1);
      this.confirmation = false;
    }else{
      this.confirmation = false;
    }
  }

}
