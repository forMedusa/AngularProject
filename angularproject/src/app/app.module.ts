import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostsComponent } from './posts/posts.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingpageComponent,
    ProfileComponent,
    TodoComponent,
    GalleryComponent,
    PostsComponent,
    TopbarComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
