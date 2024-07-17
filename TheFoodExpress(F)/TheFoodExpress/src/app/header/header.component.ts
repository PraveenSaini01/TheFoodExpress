// import { Component } from '@angular/core';
// import { AuthService } from '../service/auth.service';
// import { Route, Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
// [x: string]: any;

// constructor(public authService: AuthService,private route:Router) {}

// logout() {
//   this.authService.logout();
//   this.route.navigateByUrl("");
// }
// }

import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userEmail: string | null = null;

  constructor(public authService: AuthService, private route: Router) {
    // Retrieve user email on component initialization
    this.userEmail = this.authService.getUserEmail();
  }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('');
  }
}

