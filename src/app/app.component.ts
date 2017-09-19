import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';



  private localStorageData = [
    {
      image:'http://myprinthub.com.ua/wp-content/uploads/2017/05/14-poster.jpg',
      title:'Posters',
      price:'50.99',
      description:'The poster is an effective advertising tool that, in a local, bright manner, will convey the key message of the target audience',
      link:'prod1'
    },
    {
      image:'http://myprinthub.com.ua/wp-content/uploads/2017/05/05-broshure.jpg',
      title:'Brochure',
      price:'84.79',
      description:'A brochure is a printed matter that is usually used when necessary to deliver a short list of goods or services to the consumer, or other overview information. Usually a catalog is called a brochure if the number of pages in it is less than 8.',
      link:'prod2'
    },
    {
      image:'http://myprinthub.com.ua/wp-content/uploads/2017/05/17-photo.jpg',
      title:'Photograph',
      price:'12.99',
      description:'Print highlights and share them!',
      link:'prod3'
    }
  ];


  ngOnInit() {
    if(!localStorage.getItem('listProducts')){
      localStorage.setItem('listProducts',JSON.stringify(this.localStorageData));
    }
  }

}
