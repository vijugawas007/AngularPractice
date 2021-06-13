import { Component, OnInit } from '@angular/core';
import { User } from '../model/User-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _user : User;
  title = 'Reactive Form';
  _userData=[];
  form = new FormGroup({
    _firstName: new FormControl('', [Validators.required]),
    _lastName: new FormControl('', [Validators.required]),
    _contactNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    _emailId: new FormControl('', [Validators.required, Validators.email]),
    _dateOfBirth: new FormControl(),
    _address: new FormControl()
  });
  constructor(private _userservice: UserserviceService) { }

  ngOnInit(): void {
  }
  get formControl() {
    return this.form.controls;
  }
  submit() {
     this._userservice.setFormData(this.form);
  }
  public getUserName(_firstName: string, _lastName: string, _dateOfBirth: string, _contactNumber: number,
    _emailId: string, _address: string) {
    this._user._firstName = _firstName;
    this._user._lastName = _lastName;
    this._user._dateOfBirth = _dateOfBirth;
    this._user._contactNumber = _contactNumber;
    this._user._emailId = _emailId;
    this._user._address = _address;

  }


}
