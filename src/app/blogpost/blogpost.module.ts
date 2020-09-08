import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostService } from './blogpost.service';
import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostfeaturedComponent } from './blogpostfeatured/blogpostfeatured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [BlogpostfeaturedComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports:[
    BlogpostfeaturedComponent, BlogpostListComponent
  ],
  providers:[
    BlogpostService
  ]
})
export class BlogpostModule { }
