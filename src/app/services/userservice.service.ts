import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User-model';
import { __spread } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor() {
  }
  public getUserData(_user: User) {
    console.log(_user._firstName + " " + _user._lastName + " " + _user._address + " " + _user._contactNumber + " " + _user._emailId
      + " " + _user._dateOfBirth);
    return _user;
  }

}
