import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  topbarHeadValue:any;

  setSelectedItem(id: any) {
    this.topbarHeadValue = id;
  }

  getSelectedItem() {
    return this.selectedItemId;
  }

  selectedItemId:any;

  setSelectedItemId(id: number) {
    this.selectedItemId = id;
  }

  getSelectedItemId() {
    return this.selectedItemId;
  }
  getApi="https://panorbit.in/api/users.json";
  
  getUserData():Observable<any>{
    return this.http.get(this.getApi);
  }
}
