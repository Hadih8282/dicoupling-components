import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {user} from './../app-interface'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users: user[] = [
    {
      email: 'ad@e.com',
      password: '145656',
      address: '123 gagal ave.'
    },
    {
      email: 'dd@d.com',
      password: '1234',
      address: '145 Times ave.'
    },
    {
      email: 'fd@f.com',
      password: '18977',
      address: '189 babal ave.'
    }
  ];

  @Output() onAddUserClicked = new EventEmitter<user[]>();

  constructor() { }

  ngOnInit(): void {
    
  }

  public onAddUser(email1: string, password1: string, address1: string, e:Event) {

    e.preventDefault();

    let u: user = {
      email: email1,
      password: password1,
      address: address1
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);

  }

}
