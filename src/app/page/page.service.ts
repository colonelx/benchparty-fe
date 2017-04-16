import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Page } from './page';

@Injectable()
export class PageService{
	constructor(private http: Http) {}
	getHtml(slug: string) : Observable<Page> {
	    var page = this.http.get('http://localhost:8000' + '/' + slug)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	    return page;
  
	}
}
