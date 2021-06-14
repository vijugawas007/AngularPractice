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
  _userData : User = {
    _firstName :'',
    _lastName : '',
    _address :'',
    _contactNumber : null,
    _dateOfBirth : '',
    _emailId : ''
  };
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
    this._userData=this._userservice.getViewData();
    console.log("Form Data",this._userData);
    this.form.controls['_firstName'].setValue(this._userData._firstName);
    this.form.controls['_lastName'].setValue(this._userData._lastName);
    this.form.controls['_contactNumber'].setValue(this._userData._contactNumber);
    this.form.controls['_emailId'].setValue(this._userData._emailId);
    this.form.controls['_dateOfBirth'].setValue(this._userData._dateOfBirth);
  }
  get formControl() {
    return this.form.controls;
  } 
  
  submit() {
     this._userservice.setFormData(this.form);
  }
 

}
