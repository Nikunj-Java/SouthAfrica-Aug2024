import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="NIKUNJ SONI";
  url:string="https://www.google.com/";

  products=[{name:"pencile",price:"8.3",availability:"26-08-2024",rating:4.8},
    {name:"pen",price:"10",availability:"27-08-2024",rating:4.5},
    {name:"eraser",price:"8.9",availability:"26-08-2024",rating:5.0},
    {name:"scale",price:"12",availability:"26-08-2024",rating:4.9},
    {name:"books",price:"15",availability:"30-08-2024",rating:5.0}
  ]
  

}
