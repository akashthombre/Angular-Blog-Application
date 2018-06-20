import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogDataService } from './blog-data.service';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

//to use forms
import { FormsModule } from '@angular/forms'; 




import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpClientModule} from '@angular/common/http';
import { BlogHttpService} from './blog-http.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent,
    
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot([
      {path:"", redirectTo:'/home', pathMatch:"full"},
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'create', component:BlogCreateComponent},
      {path:"**", component:NotFoundComponent}
      
    ])
  ],
  providers: [BlogDataService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
