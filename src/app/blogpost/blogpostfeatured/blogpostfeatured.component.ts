import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpostfeatured',
  templateUrl: './blogpostfeatured.component.html',
  styleUrls: ['./blogpostfeatured.component.css']
})
export class BlogpostfeaturedComponent implements OnInit {

  Featuredbloglist=[
     {
       id:'abc123',
       imgPath:'assets/images/bloglistimages/1.jpg',
       blogHeading:'Sample blog post 1',
       blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
     },
     {
      id:'abc345',
      imgPath:'assets/images/bloglistimages/2.jpg',
      blogHeading:'Sample blog post 2',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
    {
      id:'abc567',
      imgPath:'assets/images/bloglistimages/3.jpg',
      blogHeading:'Sample blog post 3',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
    {
      id:'abc789',
      imgPath:'assets/images/bloglistimages/4.jpg',
      blogHeading:'Sample blog post 4',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
    {
      id:'abc1011',
      imgPath:'assets/images/bloglistimages/5.jpg',
      blogHeading:'Sample blog post 5',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
    {
      id:'abc1012',
      imgPath:'assets/images/bloglistimages/6.jpg',
      blogHeading:'Sample blog post 6',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
    {
      id:'abc1013',
      imgPath:'assets/images/bloglistimages/7.jpg',
      blogHeading:'Sample blog post 7',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
    {
      id:'abc1014',
      imgPath:'assets/images/bloglistimages/8.jpg',
      blogHeading:'Sample blog post 8',
      blogshortdes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
