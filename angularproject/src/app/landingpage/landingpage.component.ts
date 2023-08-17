import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private service: ApiserviceService,
              private route:Router) { }

  ngOnInit(): void {
    this.userData()
  }
  user={
    id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "sincere@april.biz",
            profilepicture: "",
            address: {
                street: "Kulas Light",
                suite: "apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
  }
  selectedItemId: number | null = null;
  users:any = []

selectItem(itemId: number) {
  this.selectedItemId = itemId;
   this.service.setSelectedItemId(this.users[itemId-1])
   localStorage.setItem('user1Name', this.users[itemId].name);
   localStorage.setItem('user1Image', this.users[itemId].profilepicture);
   localStorage.setItem('user2Name', this.users[itemId+1].name);
   localStorage.setItem('user2Image', this.users[itemId+1].profilepicture);
   this.route.navigateByUrl('/profile');
}
 
  userData(){
    this.service.getUserData().subscribe(res=>{
      this.users = res.users
      

      console.log(res.users[0])
      console.log("Object", this.users)
    })
  }
}
