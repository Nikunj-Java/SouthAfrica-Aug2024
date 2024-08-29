import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  posts:any[]=[];
  //DI
  constructor(private service:CrudService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.service.getPosts().subscribe(posts=>this.posts=posts);
  }

  addPost():void{
    const newPost={title:'New Post',content:'Lorem ipsum'};
    this.service.addPost(newPost).subscribe(()=>{this.getPosts()})

  }

  deletePosts(postId:number):void{
    this.service.deletePost(postId).subscribe(()=>{this.getPosts()})
  }

  updatePosts(postId:number){
    const UpdatePost={title:'New Post Updated',content:'Lorem ipsum Updated'};
    this.service.updatePost(postId,UpdatePost).subscribe(()=>{this.getPosts() })
  }

}
