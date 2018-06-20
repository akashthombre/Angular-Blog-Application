import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDataService } from '../blog-data.service';
import { BlogHttpService } from '../blog-http.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;



  constructor(private _activatedRoute: ActivatedRoute, private router: Router, public _blogDataService: BlogDataService, public blogHttpService: BlogHttpService) {
    console.log("constructor is called");
  }

  ngOnInit() {
    console.log("ngOnit called");

    //accessing the id from route(addressbar).
    let myBlogId = this._activatedRoute.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function from BlogDataService to get singlebloginfo
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"]; //in api,data is an object which store information
      },
      error => {
        console.log("some errors occured");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log("blog deleted successfully!");
        console.log(data);
        alert("Blog deleted successfully");
        console.log("navigate to Home component after 1 second");
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }


}
