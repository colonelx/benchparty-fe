import { Component } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Category } from '../blog/category';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  title = 'app works!';
  blog_categories : Array<Category>;
  constructor(private service:BlogService) {
    this.service.getCategories().subscribe(res=>this.blog_categories=res);
  }
}
