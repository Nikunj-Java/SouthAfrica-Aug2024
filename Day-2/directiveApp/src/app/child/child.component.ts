import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['pdata'],
  outputs:['cevent']
})
export class ChildComponent implements OnInit {

  pdata:string="";
  cevent= new  EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:string){
    this.cevent.emit(value)
  }
}
