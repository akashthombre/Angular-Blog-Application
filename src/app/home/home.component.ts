import { Component, OnInit } from '@angular/core';
import { BlogDataService} from '../blog-data.service';
import {BlogHttpService} from '../blog-http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs;

  constructor(public blogDataService:BlogDataService,public blogHttpService:BlogHttpService) {

    console.log("Home component constructor is called");
  }

  ngOnInit() {
    //this is call getAllBlogInformation function from local blogDataService data
   // this.allBlogs = this.blogDataService.getAllBlogInformation();
    //console.log(this.allBlogs);
    // this.allBlogs = this.blogHttp.getAllBlogInformation();
    
    this.allBlogs = this.blogHttpService.getAllBlogInformation().subscribe(
      data => {
        console.log (data);
        this.allBlogs = data["data"]; //in api,data is an object which store information
      },
      error => {
        console.log("some errors occured");
        console.log(error.errorMessage);
      }
    ) 




  }

}
