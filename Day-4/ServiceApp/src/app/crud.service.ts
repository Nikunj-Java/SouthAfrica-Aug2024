import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url:string="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  getPosts():Observable<any[]>{

    return this.http.get<any[]>(this.url);
  }

   addPost(post:any):Observable<any>{
    return this.http.post<any>(this.url,post);
   }

  deletePost(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  updatePost(id:number,post:any):Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`,post);
  }
}
