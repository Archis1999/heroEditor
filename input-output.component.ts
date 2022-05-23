import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Output() property=new EventEmitter<string>();
  property2='message from child'
  constructor() { }

  sendData(){
    this.property.emit(this.property2);
  }

  ngOnInit() {
  }

}
