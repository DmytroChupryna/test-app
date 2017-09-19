import { Injectable } from '@angular/core';
import {productModel} from "../models/product.model";
import {Subject, Observable} from "rxjs";

@Injectable()
export class UppdateProductsService {

  constructor() { }

  /**
   * getListData
   *
   * @param str - name of listData
   * @returns {productModel[]}
   */

  getListData(str:string = 'listProducts'): productModel[]{
    let model: productModel[] = [] ;
    let objData = JSON.parse(str);
    objData.map((obj)=>{
      model.push( new productModel(obj.title, obj.link, obj.image, obj.description, parseFloat(obj.price)) );
    });
    return model;
  }

  /**
   * setProductToList
   *
   * @param obj
   */
  setProductToList(obj:any){
    let objData = JSON.parse(localStorage.getItem('listProducts'));
    let pushToListDataObj = {
      title: obj.title,
      description: obj.desc,
      price: obj.price,
      image: obj.image,
      link: `prod${objData.length+1}`
    };
    objData.push(pushToListDataObj);
    localStorage.setItem('listProducts',JSON.stringify(objData));
  }
  /**
   * deleteProduct
   *
   * @param index
   */
  deleteProduct(index:number){
    let objData = JSON.parse(localStorage.getItem('listProducts'));
    objData.splice(index, 1);
    localStorage.setItem('listProducts',JSON.stringify(objData));
  }

  private subject = new Subject<any>();
  sendStateAddProduct(message: string) {
    this.subject.next(message);
  }
  getStateAddProduct(): Observable<any> {
    return this.subject.asObservable();
  }

}
