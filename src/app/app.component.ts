import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loggedIn=false;


logout(){
  localStorage.removeItem('token');
}

ngOnInit(){
this.loggedIn=localStorage.getItem('token') !==null;
}



}
