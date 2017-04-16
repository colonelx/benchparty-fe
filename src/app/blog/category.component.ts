import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../blog/blog.service';
import { Post } from './post'

@Component({
  selector: 'page',
  templateUrl: './category.component.html'
})
export class CategoryComponent {

  
private sub: any;
    slug: string;
    posts: Array<Post>;
    category: string;

	constructor(private route: ActivatedRoute,
  	private router: Router,
  	private service: BlogService) {}
  ngOnInit() 
	{
		let slug = this.route.snapshot.params['slug'];
		this.sub = this.route.params.subscribe(params => { 
      slug = params['slug'];
      this.service.getCategory(slug).subscribe(res=> { this.posts=res.posts; this.category=res.category });
    });
  	
	}
}