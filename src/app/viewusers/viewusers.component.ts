import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../model/User-model';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  constructor(private _userService: UserserviceService) { }
  _userData: User[];


  ngOnInit(): void {
    this._userService.getAllUserData().subscribe(data=>{
      this._userData=data
    });
  }

}
