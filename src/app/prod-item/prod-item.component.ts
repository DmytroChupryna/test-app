import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UppdateProductsService} from "../services/uppdate-products.service";

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {

  @Input() item:any = '';
  @Input() index: number;
  @Output() removeElementEmitter:EventEmitter<any>  = new EventEmitter();

  constructor(
      private UppdateProductsService_ : UppdateProductsService,
  ) { }

  ngOnInit() {

  }
  removeProd(index){
     this.UppdateProductsService_.deleteProduct(index);
     this.removeElementEmitter.emit(index);
  }
}
