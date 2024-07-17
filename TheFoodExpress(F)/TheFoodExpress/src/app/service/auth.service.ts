import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenInterceptorService } from './token-interceptor.service';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  public userEmail: string | null = null; // Change this to public

  constructor(private http: HttpClient, private tokenService: TokenInterceptorService) { }

  saveUser(userDetails: any) {
    console.log("inside auth services")
    return this.http.post(`http://localhost:9000/api/v1/save `, userDetails, {
      observe: 'response', withCredentials: true
    });
  }

  loginUser(user: any) {
    this.isAuthenticated = true;
    this.userEmail = this.tokenService.getUserEmail();

    return this.http.post(`http://localhost:9000/api/v1/login`, user, { responseType: 'text', withCredentials: true });
  }



  logout() {
    this.isAuthenticated = false;
    this.userEmail = null;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

  getUserEmail() {
    return this.userEmail;

  }
 

setUserEmail(email: string | null): void {
  this.userEmail = email;
}

}


