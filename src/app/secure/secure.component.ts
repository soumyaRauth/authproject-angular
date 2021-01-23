import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent implements OnInit {
  user;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const header = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    this.http
      .get('http://localhost:8000/api/user', { headers: header })
      .subscribe(
        (result) => {
          console.log(result);
          this.user = result;
          if (result['error']) {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          console.log(error);
        }
      );
  }
}
