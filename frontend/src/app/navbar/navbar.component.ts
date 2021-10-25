import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: Boolean = false;

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd'){
        this.isLoggedIn = this.auth.loggedIn;
      }
    })
  }

  logout(){
    this.auth.loggedIn = false;
    this.auth.logout();
    this.router.navigate(['/browse']);
  }

}
