import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: "",
    component: LandingpageComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "todo",
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
