import { Injectable } from '@angular/core';

@Injectable()
export class BlogDataService {


  constructor() {

    console.log("service constructor is called");
  }

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "20 July 2007",
      "created": "20 July 2007",
      "tags": [],
      "author": "Admin",
      "description": "A lot of times when people try to write funny, they wind up with something zany, whacky or implausible. What they should be shooting for is plausible but unexpected.",
      "category": "comedy",
      "isPublished": true,
      "views": 430,
      "bodyHtml": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2016-07-20T12:20:47.854z",
      "created": "2016-07-20T12:20:47.854z",
      "tags": [],
      "author": "Admin 2",
      "category": "comedy",
      "description": "This is also part of a concept I learned from one of the best, George Carlin. Carlin said, “I know with 98 percent accuracy that a joke is going to be funny before I step on stage.”  I said, “How do you know that?” He said, “Because it contains all the elements a joke needs to be funny.”",
      "isPublished": true,
      "views": 984,
      "bodyHtml": "<h1>This is h1 Text</h1> <p>This is paragraph</p>",
      "title": "This is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2015-9-21T02:20:47.854z",
      "created": "year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11",
      "tags": [],
      "author": "Santa",
      "category": "Humour",
      "isPublished": true,
      "views": 25,
      "description": `I don’t prejudge the facts, I just write them down. They include who I am, where I’m from, my heritage (lineage), my parents, family, religion, politics, relationship status, my idiosyncrasies, flaws, failures, etc.

      The facts also include what I’ve been doing the last few weeks, days, hours.
      
      The general idea is that a comedian should be able to take any logical grouping of words and turn it funny using structure.`,
      "bodyHtml": "this is blog 3 description",
      "title": "This is blog 3"
    },
    {
      "blogId": "4",
      "lastModified": "20 July 2007",
      "created": "20 July 2007",
      "tags": [],
      "author": "Writer",
      "description": "A lot of times when people try to write funny, they wind up with something zany, whacky or implausible. What they should be shooting for is plausible but unexpected.",
      "category": "comedy",
      "isPublished": true,
      "views": 2545,
      "bodyHtml": "this is blog 4 description",
      "title": "This is blog 4"
    },
    {
      "blogId": "5",
      "lastModified": "2004-6-20T12:20:47.854z",
      "created": "2016-07-20T12:20:47.854z",
      "tags": [],
      "author": "Blogger",
      "category": "comedy,love",
      "description": "This is also part of a concept I learned from one of the best, George Carlin. Carlin said, “I know with 98 percent accuracy that a joke is going to be funny before I step on stage.”  I said, “How do you know that?” He said, “Because it contains all the elements a joke needs to be funny.”",
      "isPublished": true,
      "views": 5406,
      "bodyHtml": "<h1>This is h1 Text</h1> <p>This is paragraph</p>",
      "title": "This is blog 5"
    },
    {
      "blogId": "6",
      "lastModified": "2017-2-21T02:20:47.854z",
      "created": "year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11",
      "tags": [],
      "author": "Santa",
      "category": "Humour,standup comedy",
      "isPublished": true,
      "views": 100000,
      "description": `I don’t prejudge the facts, I just write them down. They include who I am, where I’m from, my heritage (lineage), my parents, family, religion, politics, relationship status, my idiosyncrasies, flaws, failures, etc.

      The facts also include what I’ve been doing the last few weeks, days, hours.
      
      The general idea is that a comedian should be able to take any logical grouping of words and turn it funny using structure.`,
      "bodyHtml": "this is blog 3 description",
      "title": "This is blog 6"
    }

  ]

  //Methd to get AllBloginfo in Home component
  public getAllBlogInformation(): any {
    return this.allBlogs;
  }

  //method to get particular blog info in Blog-view component
  public currentBlog;
  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);

    //this line is very very important
    return this.currentBlog;
  }
}
