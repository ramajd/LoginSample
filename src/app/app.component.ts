import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email = 'test@test.com';
  password = 'Test123';
  url = 'http://ec2-52-88-232-141.us-west-2.compute.amazonaws.com/login';
  msg: string;
  constructor(private http: HttpClient) {}


  login() {
    this.msg = 'loading...';
    this.http.post(this.url, { email: this.email, password: this.password })
      .subscribe(
        res => this.msg = JSON.stringify(res),
        err => this.msg = JSON.stringify(err)
      );
  }
}
