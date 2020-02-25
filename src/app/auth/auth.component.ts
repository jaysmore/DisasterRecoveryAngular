import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  model: any = {};
  constructor( private authService: AuthService) {}

  ngOnInit(): void {
  }

  
login() {

  this.authService.login(this.model).subscribe(next => {
    console.log("successful login");
  }, error => {
    console.log("login failed");
   });
}

}
