import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import { AlertifyService } from '../shared/alertify.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registerMode = false;
  values: any;
  model: any = {};
  constructor( private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit(): void {
  }

  
login() {

  this.authService.login(this.model).subscribe(next => {
    this.alertify.success("Logged in successfully.");
  }, error => {
    this.alertify.error(error);
   });
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

logout(){
  localStorage.removeItem('token');
  this.alertify.message('Logged Out');
} 

registerToggle(){
  this.registerMode = true;
  console.log(this.registerMode);
}

cancelRegisterMode(registerMode: boolean) {
  this.registerMode = registerMode;
 }

}
