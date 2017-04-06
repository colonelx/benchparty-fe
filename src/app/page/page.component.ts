import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageService } from './page.service';
import { Page } from './page'
@Component({
	  selector: 'page',
	  templateUrl: 'page.component.html',
	  providers: [PageService]
	})



export class PageComponent implements OnInit {

	private sub: any;
	slug: string;
	page: Page = {
		title: "Test",
		content: ""
	}

	constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private pageService : PageService,
	) {}
	ngOnInit() {
	  let slug = 'home';
	  this.sub = this.route.params.subscribe(params => { 
	  	slug = params['slug'];
	  	
	  	this.pageService.getHtml(slug)
	  		.subscribe(
	  			page => this.page = page
	  		);

	  });
	  
	}

}
