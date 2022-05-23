import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angulartraining',
  templateUrl: './angulartraining.component.html',
  styleUrls: ['./angulartraining.component.css']
})
export class AngulartrainingComponent implements OnInit {

  name = 'Archis';
  // tempRef : any
  networkStatus = 0
  placesArray = ['Pune','Mumbai','Hyderabad','Bangalore']
  placeName = 'Enter name'
  userName ='';
  valuePrint:boolean=false;
  property:string;
  products = [
    {product:'sony', price:13000},
    {product:'micromax', price:8000},
    {product:'Mi', price:11000}
  ]
  @Input() inputEg = ''

  constructor() { }

  ngOnInit() {
   
  }

  myFirst(){
    return "Ncpl";
  }

  getInputData(tempRef){
    console.log('Template ref working',tempRef)
  }
  message : string =''
  onAddToCart(){
    this.message='Product added to cart'
  }
  message1 : string =''
  onAddToCart1(event){
    this.message1= event.target.value+' added to cart'
  }
  makeItTrue(){
    this.valuePrint = !this.valuePrint
  }
  productValue = '';
  getProductValue(event){
    this.productValue = event.target.value;

  }
  parentFunction(event){
this.property = event;
  }  
}
