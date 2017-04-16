import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../blog/blog.service';
import { Post } from './post'

@Component({
  selector: 'page',
  templateUrl: './blog.component.html'
})
export class BlogComponent {
	slug: string;
	is_blog: boolean = true;
	post: Post = new Post('','','','',[],new Date());
	constructor(private route: ActivatedRoute,
  	private router: Router,
  	private service: BlogService)
	{
		let slug = this.route.snapshot.params['slug'];
		
  		this.service.getPost(slug).subscribe(obj => {
  			let data = obj[0]['fields'];
  			let p = new Post(
  				data.title,
  				data.slug,
  				'http://localhost:8000/media/' + data.image,
  				data.content,
  				data.categories,
  				data.updated
  			);
  			this.post = p;
  		});
	}
}