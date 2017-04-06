import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PageService } from './page.service';
import { PageComponent } from './page.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    
  ],
  declarations: [
    PageComponent
  ],

  providers: [
      PageService
  ],

  exports:[
    PageComponent
  ]
  
})
export class PageModule {
}

