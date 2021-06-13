import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User-model';
import { __spread } from 'tslib';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
   
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private _http: HttpClient) {
  }

  _userData : User = {
    _firstName :'',
    _lastName : '',
    _address :'',
    _contactNumber : 0,
    _dateOfBirth : '',
    _emailId : ''
  };

  _url="../../assets/data.json";

  /* _formData = new FormGroup({
    _firstName: new FormControl(),
    _lastName: new FormControl(),
    _contactNumber: new FormControl(),
    _emailId: new FormControl(),
    _dateOfBirth: new FormControl(),
    _address: new FormControl()
  }); */

   getAllUserData():Observable<User[]>{
    return this._http.get<User[]>(this._url);
  }

  setFormData(_formData : FormGroup){
    //this._formData=_formData;
    this._userData._firstName=_formData.controls['_firstName'].value;
    this._userData._lastName =_formData.controls['_lastName'].value;
    this._userData._contactNumber=_formData.controls['_contactNumber'].value;
    this._userData._address=_formData.controls['_address'].value;
    this._userData._dateOfBirth=_formData.controls['_dateOfBirth'].value;
    this._userData._emailId=_formData.controls['_emailId'].value;
    
    //this.$formUserData.emit(this._userData);
  }

  getFormData(){
    return this._userData;
  }



}
