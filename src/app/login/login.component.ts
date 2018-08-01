import { Component,  ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Userpwd } from '../userpwd';
import { Userobj } from '../userobj';
import {Router} from '@angular/router';
import { USERPWDS} from '../mock-users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// @ViewChild('frm') public userFrm: NgForm;


export class LoginComponent implements OnInit {
  userpwd: Userpwd = {username: 'k.su@griffith.edu.au', pwd: '666666'};

  userobj: Userobj = {userid: 1 ,  username: this.userpwd.username, userbirthdate: null, userage: null};
  constructor(private router: Router ) {}

  ngOnInit() {
  }
  public loginfunc() {
    let i;
    for (i = 0; i < USERPWDS.length; i++) {
        if ((USERPWDS[i].username === this.userpwd.username) && (USERPWDS[i].pwd === this.userpwd.pwd)) {
          sessionStorage.setItem('userid', this.userobj.userid.toString());
          sessionStorage.setItem('username', this.userobj.username);
          sessionStorage.setItem('userbirthdate', this.userobj.userbirthdate);
          sessionStorage.setItem('userage', this.userobj.userage.toString());

          this.router.navigateByUrl('account');
          return;
        }
    }
    alert('Sorry, uername or password is not valid');
  }

}
