import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // on init
  ngOnInit() : void {
    // console.log(title)
  }

  type: string = "password"
  isText: boolean = false
  eye_icon: string = "bx-hide"
  login_username = null
  login_password = null
  login_username_error = false

  funcShowHideText(){
    this.isText = !this.isText
    this.eye_icon = this.isText ? "bx-show" : "bx-hide"
    this.type = this.isText ? "text" : "password"
  }

  funcLogin(){
    console.log(this.login_username)
    if(this.login_username == null || this.login_username == ''){
      this.login_username_error = true
    }
    else{
      this.login_username_error = false
    }
  }
}
