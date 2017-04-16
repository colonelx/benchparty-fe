import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../blog/blog.service';
import { Category } from '../blog/category';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	blog_categories : Array<Category>;
	constructor(private service:BlogService,
	) {
    this.service.getCategories().subscribe(res=>this.blog_categories=res);

  }
}