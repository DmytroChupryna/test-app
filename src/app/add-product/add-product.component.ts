import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UppdateProductsService} from "../services/uppdate-products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public addProductForm = this.fb.group({
    title: ['', Validators.minLength(4)],
    price: ['',Validators.pattern(/[0-9]/)],
    desc: ['', Validators.minLength(10)]
  });

  public statusForm: boolean = false;
  public invalidFile: boolean = false;
  public img: string = '';
  constructor(
      public fb: FormBuilder,
      private UppdateProductsService_ : UppdateProductsService,
      private router: Router) { }

  ngOnInit() {}
  onSubmit(e){
    this.statusForm =  this.addProductForm.status == 'VALID' ;
    if(this.statusForm){
      let sendObj = {
        title: this.addProductForm.value.title,
        desc: this.addProductForm.value.desc,
        price: parseFloat(this.addProductForm.value.price),
        image: this.img
      };
      this.UppdateProductsService_.setProductToList(sendObj);
      this.addProductForm.reset();
      this.UppdateProductsService_.sendStateAddProduct('true');
      this.router.navigate(['/products'])
    }
  }


  onFileWrite(e){
    let thisElem = e.target;
    let this_ = this;
    if (thisElem.files[0].type.indexOf('image') < 0) {
      this.invalidFile = true;
      setTimeout(()=>{
        this.invalidFile = false;
      },3000);
      return;
    }
    let fileReader = new FileReader();
    fileReader.onload = function () {
      this_.img = fileReader.result;
    };
    fileReader.readAsDataURL(thisElem.files[0]);
  }

}
