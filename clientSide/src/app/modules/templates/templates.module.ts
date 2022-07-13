import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './components/home/home.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

// Service
import { BlogsService } from './services/blogs.service';

@NgModule({
  declarations: [
    HomeComponent,
    CreateBlogComponent,
    ViewBlogComponent,
    EditBlogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    BlogsService
  ]
})
export class TemplatesModule { }
