import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service: ApiserviceService,
              private route:Router,
              private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.setData()
  }
  user1Name= localStorage.getItem('user1Name');
  user1Image= localStorage.getItem('user1Image');
  user2Name= localStorage.getItem('user2Name');
  user2Image= localStorage.getItem('user2Image');
  userData:any=[];


  setData(){
    this.userData = this.service.getSelectedItemId();
  }
  
  clear(){
    localStorage.clear()
    this.route.navigateByUrl('/')
  }

}
