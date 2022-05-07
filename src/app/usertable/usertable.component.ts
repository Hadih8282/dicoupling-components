import { Component, Input, OnInit } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  userss: user[]= [
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
  
  
  @Input() users: user[] = []
    

  constructor() { }

  ngOnInit(): void {

    this.users = this.userss;
    
  }

}
