import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserClass } from './UserClass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  //API: https://jsonplaceholder.typicode.com/users
  url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

 getAllUsers():Observable<UserClass[]>{
  return this.http.get<UserClass[]>(this.url);
 }

}
