import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { UserClass } from '../UserClass';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:UserClass[];
  user={"fname":"","lname":""};
  //Dependency Injection
  constructor(private service:MydataService,private httpservice:DataService) { }

  

  ngOnInit(): void {
    this.user=this.service.getUser();
    this.httpservice.getAllUsers().subscribe(result=>this.users=result)
  }

}
