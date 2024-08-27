import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[{name:"pencile",price:"8.3",availability:"26-08-2024",rating:4.8},
    {name:"pen",price:"10",availability:"27-08-2024",rating:4.5},
    {name:"eraser",price:"8.9",availability:"26-08-2024",rating:5.0},
    {name:"scale",price:"12",availability:"26-08-2024",rating:4.9},
    {name:"books",price:"15",availability:"30-08-2024",rating:5.0}
  ]

  flag:boolean=false;

  show(){
    this.flag=!this.flag;
  }

 public day=new Date().getDay();  
}
