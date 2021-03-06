import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service'; 
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  public loading : boolean;
  public username: string;
  public password: string;
  
  hide = true;
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logindetails=[];
  ngOnInit(): void {
       /* this._loginservice.getlogindata()
    .subscribe(data =>{
      this.logindetails = data;
      console.log(data);
    }  );
    */
  }

  onSubmit(form:NgForm):void
  { 
    this.loading = true;
    const loginPayload = {
      username: form.value["username"],
      password: form.value["password"]
    }
    this._loginservice.postlogindata(loginPayload)
    .subscribe( data => {
        console.log('success',data["Status"]);
        if( data["Status"] == 1 ){
          this.router.navigate(['navbar']);
          localStorage.setItem('custid',this.username);
          console.log(localStorage.getItem('custid'));
        }
        else {
          alert("Invalid Username or Password");
          this.loading = false;
        }
      }
    );
     /*console.log(this.username);
     console.log(this.password);
     console.log(form.value["username"]);
     console.log(loginPayload);*/
  }  
}