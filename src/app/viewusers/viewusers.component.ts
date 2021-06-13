import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../model/User-model';
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
    _contactNumber : 0,
    _dateOfBirth : '',
    _emailId : ''
  }; 

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


}
