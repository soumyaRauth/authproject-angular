import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 6,
      client_secret: 'Pf4sYnipZI3pMtZuF4oks8MzD4TikEX92XftEvby',
      scope: '*',
    };

    console.log(data);
    this.http.post('http://localhost:8000/oauth/token', data).subscribe(
      (result) => {
        if (result['access_token']) {
          localStorage.setItem('token', result['access_token']);
          console.log(result);
          this.route.navigate(['/secure']);
        } else {
          console.log(result);
        }
      },
      (error) => {
        console.log('Error');
        console.log(error);
      }
    );
  }
}
