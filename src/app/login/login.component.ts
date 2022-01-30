import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const loginData = [
  { email: 'example@gmail.com', password: 'examplepassword' },
  { mobile: 9999999999, password: '9999password' },
];
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoading: boolean = false;
  // Login FOrm
  loginForm = this.fb.group({
    usernameLabel: ['', Validators.required],
    passwordLabel: ['', Validators.required,],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.resetLoginForm();
  }
  // Reset Form when page is fresh
  resetLoginForm() {
    this.isLoading = true;
    this.loginForm = this.fb.group({
      usernameLabel: new FormControl('', [Validators.required]),
      passwordLabel: new FormControl('', Validators.required),
    });
  }
  // validation for username
  validate() {
    var textBoxValue = this.loginForm.controls['usernameLabel'].value;
    var emailPattern = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/; 
    var password = this.loginForm.controls['passwordLabel'].value;
    if(textBoxValue == '') {
      alert('Please enter value');
      return false;
    } else if(isNaN(textBoxValue)) {
      if(!(textBoxValue.match(emailPattern))) {
        alert('Please enter valid email');
        return false;
      }
    } else {
      if(textBoxValue.length != 10) {
        alert('Please enter valid phone no');
        return false;
      }
    }
    if(password.length < 5) {
      alert('Password will be min of 5 characters');
      return false;
    }
  }
  // Redirect to page when user and password field is fill
  login(component: string) {
    if (this.loginForm.invalid) {
      console.log('loginForm is Invalid');
      console.log('value for loginForm', this.loginForm);
    } else {
      for (var i = 0; i < loginData.length; i++) {
        if (
          this.loginForm.controls['usernameLabel'].value ==
            loginData[i].email ||
          this.loginForm.controls['usernameLabel'].value == loginData[i].mobile
        ) {
          console.log('msg', loginData[i]);
          if(this.loginForm.controls['passwordLabel'].value == loginData[i].password){

            this.router.navigate(['/' + component]);
            
            break

          }
          else{
            alert("wrong pass")
          }
        }
        else{
          alert("wrong username")
        }
      }
    }
  }
}
