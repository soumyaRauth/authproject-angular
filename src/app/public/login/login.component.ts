import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  form:FormGroup 
  
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {

    this.form=this.fb.group({
      email:'',
      password:''
    })
  }


  submit(){
    const formData=this.form.getRawValue();

    const data={
      username:formData.email,
      password:formData.password,
      grant_type:'password',
      client_id:4,
      client_secret:'gOa57dvKkswhFiua54YKP4ahP8X0gUDGsmFwFUeb',
      scope:'*'
    }
    
    this.http.post('http://localhost:8000/oauth/token',data).subscribe(data=>{
      console.log('successfully logged in');
      console.log(data);
      
    },err=>{
      console.log('Error');
      console.log(err);
      
    })
  }

}
