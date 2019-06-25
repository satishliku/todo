import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="in28minutes"
  password=""
  
  errorMessage="Invalid Login Credential"
  invalid=false
  constructor(private routers:Router,private hardcodedAuthenticationService : HardcodedAuthenticationService) 
  { }

  ngOnInit() {
  }
  handleLogin(){
    //if(this.username==="in28minutes" && this.password==="dummy")
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.invalid=false;
      //routing to welcome page
      this.routers.navigate(['welcome',this.username]);
    }else{
      this.invalid=true;
    }
    
    
  }
}