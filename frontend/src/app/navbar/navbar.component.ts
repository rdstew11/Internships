import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private auth: AuthService) { 

  }

  loginStatus$!: Observable<Boolean>;

  ngOnInit(): void {

    this.loginStatus$ = this.auth.isLoggedIn;
  }

  logout(){
    this.auth.logout();
  }

}
