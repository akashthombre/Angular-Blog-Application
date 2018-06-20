import { Component, OnInit  } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

//import for route from one component to another automatically after 1 second using setTimeout function
import { ActivatedRoute, Router } from '@angular/router';
//import for beautiful UI success message



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService: BlogHttpService, public activatedRoute: ActivatedRoute, public router: Router) {
 
    console.log("Blog-Create constructor is called");


  }
  // declare variables that are documented in our api, that required to create blog
  public blogTitle: string;
  public blogDescription: string;
  public blogBodyHtml: string;
  public blogCategory: string;

  //possible categories to select from form options

  ngOnInit() {
  }

  public createBlog(): any {

    //reffers above varibles to local var
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory


    }

    console.log(blogData);


    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog created successfully");
        console.log(data);
        alert("ooh! Blog posted successfully!");
        console.log("Routing to Blog-View component after 1 second");
         setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
         
        }, 1000);
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
        alert("Some error occured");

      }
    )
  }
}