import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor() { }

  getUser(){
    return {"fname":"Nikunj","lname":"Soni"}
  }
}
