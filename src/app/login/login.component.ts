import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoading: boolean = false;
  // Login FOrm
  loginForm= this.fb.group({
    'usernameLabel':['',Validators.required],
    'passwordLabel':['',Validators.required],
  });
  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.resetLoginForm();
  }
  // Reset Form when page is fresh
  resetLoginForm(){
    this.isLoading=true;
    this.loginForm= this.fb.group({
      'usernameLabel':['',Validators.required],
      'passwordLabel':['',Validators.required],
    });;
  }
  // Redirect to page when user and password field is fill
  login(component:string){
    if (this.loginForm.invalid) {
      console.log("loginForm is Invalid");
      console.log("value for loginForm",this.loginForm);    
    } else{
      this.router.navigate(['/'+component]);
    }
    
  }
}
