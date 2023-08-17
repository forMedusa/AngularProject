import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router,
    private service: ApiserviceService) {}
  
    ngOnInit(): void {
        
    }
    what:any;
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
