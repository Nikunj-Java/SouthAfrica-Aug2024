import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user={"fname":"","lname":""};
  //Dependency Injection
  constructor(private service:MydataService) { }

  ngOnInit(): void {
    this.user=this.service.getUser();
  }

}
