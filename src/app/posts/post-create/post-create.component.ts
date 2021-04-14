import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Post {
  name:string;
  title: string;
  skill: string;
  
  }

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})


export class PostCreateComponent implements OnInit {
post: Post;
@Output() postCreated = new EventEmitter<Post>();
constructor() {
this.post = {} as Post;
}
ngOnInit(): void {
throw new Error('Method not implemented.');
}
onAddPost() {
const post = {
name: this.post.name,
title: this.post.title,
skill: this.post.skill
}
this.postCreated.emit(post);


}
}

