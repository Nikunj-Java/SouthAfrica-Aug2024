import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="My Name is Nikunj And i am a JAVA FSD Trainer";
  pi:number=3.1415927;
  a=0.12345;
  b=9876.54321;
  today=new Date();
  object={name:"Nikunj Soni",email:"nikunj@gmail.com",address:"India"}

  //custom pipe

  custom:string="Welcome to the World of CustomPipes";

}
