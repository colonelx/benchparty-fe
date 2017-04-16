import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';

import { Category } from './category';
import { Post } from './post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class BlogService {
	categories: Array<Category>;
	constructor(private http: Http) {}
  getCategories() {
    	
	return this.http.get('http://localhost:8000' + '/blog/menu-categories/')
		.map(res => <Category[]>res.json())
		.map((categories: Array<any>) => {
			let result: Array<Category> = [];
			if (categories) {
          		categories.forEach((category) => {
          			var cat = new Category(category['fields'].name,category['fields'].slug);
          			
          			result.push(cat);
          		});

          	}
			return result;
		});
  }
  getCategory(slug:string) {
  	return this.http.get('http://localhost:8000' + '/blog/category/' + slug)
  		.map(res => <Post[]>res.json())
  		.map((model: Object) => {
  			let result: Array<Post> = [];
  			if(model['posts']) {
  			
  					model['posts'].forEach((post) => {
  					var p = new Post(
  							post.title,
  							post.slug,
  							'http://localhost:8000/media/' + post.image,
  							post.content,
  							post.categories,
  							post.updated
  						);
  					result.push(p);
  				});
  			}
  			return { 'category': model['category'], 'posts': result };
  		});
  }
  getPosts() {
  	return this.http.get('http://localhost:8000' + '/blog/')
  		.map(res => <Post[]>res.json())
  		.map((posts: Array<Post>) => {
  			let result: Array<Post> = [];
  			if(posts) {
  				posts.forEach((post) => {
  					var p = new Post(
  							post['fields'].title,
  							post['fields'].slug,
  							'http://localhost:8000/media/' + post['fields'].image,
  							post['fields'].content,
  							post['fields'].categories,
  							post['fields'].updated
  						);
  					result.push(p);
  				});
  			}
  			return result;
  		});
  }
  getPost(slug:string) {

  	return this.http.get('http://localhost:8000' + '/blog/' + slug)
  		.map(res => res.json());
  }

}