import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private router: Router,public _loginservice:LoginserviceService) { }

  ngOnInit(): void {
  }
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  logout(){
    this.router.navigate(['home']);
    window.onpopstate = function (e) {
      window.history.forward();
    }
  }
  // sidenavEvents(str) {
  //   console.log(str);
  // }
}
