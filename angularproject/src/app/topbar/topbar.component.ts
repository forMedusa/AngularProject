import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

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
