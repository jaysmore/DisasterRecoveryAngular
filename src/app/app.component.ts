import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jwtHelper = new JwtHelperService();
  

  constructor(public authService: AuthService){}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      console.log(token);
  
    }

  }

  getRole() {
    return this.authService.getRole().toString();
  }

  NgOnDestroy() {
    localStorage.removeItem('token');
  }

  isUser() {
    return this.authService.isUser()
  }

  isAdmin() {
    return this.authService.isAdmin()
  }

}
