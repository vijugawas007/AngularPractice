import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../model/User-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  constructor(private _userService: UserserviceService) { }
  _userData1 :User[];
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

  ngOnInit(): void {
     this._userService.getAllUserData().subscribe(data=>{
      this._userData1=data
    });
  /*
   /*  this._userService.$formUserData.subscribe(data => {
      this._userData = data, console.log("Ola", this._userData)
      this._userData= this._userData;
    }
    ); */
    
    this._userData = this._userService.getFormData();
  }
  sendFormDatatoService(){
    this._userService.setViewData(this._userData);
  }



}
