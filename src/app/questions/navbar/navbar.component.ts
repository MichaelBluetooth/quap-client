import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> = this.auth.isAuthenticated$;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }
}
