import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User-model';
import { __spread } from 'tslib';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
   
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private _http: HttpClient) {
  }

  _url="../../assets/data.json";

   getAllUserData():Observable<User[]>{
    return this._http.get<User[]>(this._url);
  }

  findUserByName(){
    
  }

}
