import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registerMode = false;
  values: any;
  model: any = {};
  constructor( private authService: AuthService) {}

  ngOnInit(): void {
  }

  
login() {

  this.authService.login(this.model).subscribe(next => {
    console.log("successful login");
  }, error => {
    console.log(error);
   });
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

logout(){
  localStorage.removeItem('token');
  console.log('logged out');
} 

registerToggle(){
  this.registerMode = true;
  console.log(this.registerMode);
}

cancelRegisterMode(registerMode: boolean) {
  this.registerMode = registerMode;
 }

}
