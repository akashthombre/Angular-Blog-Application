import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl ='https://blogapp.edwisor.com/api/v1/blogs';
  private authToken ='ODI0YTNmMDRhODViYTIwYWZjMjdhZDdlNmE4Yjk2Y2ExOWQ5NmM0OWQxNjVkODY3ZjE5NTM2NWYyN2FjYjdjNjE5MmI5M2ZjZDVkMWU5MzdiMjE0NDM4ZDAxYmI2OWEyNzU5MzM4M2FiNzFhY2QyMWJjZTY2YzViZGUyNjNjZjk1MTg2';

  constructor(public http:HttpClient) {
    console.log("Blog-Http construcr called");
   }

   //exception handler code
   private handleError(err:HttpErrorResponse){
     console.log("Handle error http calls");
     console.log(err.message);
     return Observable.throw(err.message); 
   }

   public getAllBlogInformation(): any {
    let myResponse = this.http.get(this.baseUrl+'/all?authToken=' + this.authToken); 
    console.log(myResponse);
    return myResponse;
   }

  //method to get particular blog info in Blog-view component
  
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse =this.http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  //create blog method using form

  public createBlog(blogData):any {
    let myResponse = this.http.post(this.baseUrl + '/create' + '?authToken=' +this.authToken,blogData);
    console.log(myResponse);
    return myResponse; //to return in our component
  }

  //delete particular blog
  public deleteBlog(blogId):any {
    let data = {}
    let myResponse = this.http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' +this.authToken,blogId);
    console.log(myResponse);
    return myResponse;
  }

}
