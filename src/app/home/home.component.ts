import { Component } from '@angular/core';
import { Post } from '../blog/post';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'page',
  templateUrl: './home.component.html'
})
export class HomeComponent {
	posts: Array<Post>;
	constructor(private service:BlogService)
	{
		this.service.getPosts().subscribe(res=>this.posts=res);
	}
}
