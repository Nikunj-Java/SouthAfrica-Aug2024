import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  add(a:number,b:number):number{
    return a+b;
  }

  subtract(a:number,b:number):number{
    return a-b;
  }

  multiply(a:number,b:number):number{
    return a*b;
  }
  divide(a:number,b:number):number{
    if(b===0){
      throw new Error('Cannot Divide By Zeo');
    }
    return a/b;
  }

  constructor() { }
}
