import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit{
  constructor(private service: ApiserviceService, private route:Router){}
  ngOnInit(): void {
      // this.route.navigateByUrl("")
      this.setData()
  }
  userData:any=[];
  setData(){
    this.userData = this.service.getSelectedItemId();
    //console.log(this.userData.name)
  }
  
}
