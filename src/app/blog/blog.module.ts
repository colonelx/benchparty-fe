import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BlogService } from './blog.service';
import { BlogComponent } from './blog.component';
import { CategoryComponent } from './category.component';
import { RouterModule , Routes }   from '@angular/router';

const blogRoutes: Routes = [

  {
    path: 'blog/category/:slug',
    component: CategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog/:slug',
    component: BlogComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    RouterModule.forRoot(blogRoutes),
    
  ],
  declarations: [
    BlogComponent,
    CategoryComponent,
  ],

  providers: [
      BlogService
  ],

  exports:[
     BlogComponent,
     CategoryComponent,
  ]
  
})
export class BlogModule {
}

