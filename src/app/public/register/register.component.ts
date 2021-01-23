import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
form:FormGroup
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  submit(){
   const registerInformation= this.form.getRawValue();
   console.log(registerInformation);
   
   this.http.post('http://localhost:8000/api/registration',registerInformation).subscribe(result=>{
     console.log(result);
     
   },error=>{
     console.log("Error");
     console.log(error);
     
   })

  
  }

  ngOnInit(): void {

    this.form=this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      passwordd:['',Validators.required],
      pwdconfirm:['',Validators.required]
    });
  }

}
