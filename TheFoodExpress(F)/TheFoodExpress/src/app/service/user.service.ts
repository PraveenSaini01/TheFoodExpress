// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:9000/api/v4/register'

  //constructor(private http: HttpClient) {}

  // registerUser(userData: any): Observable<any> {
  //   const registerUrl = `${this.apiUrl}/register`;
  //   return this.http.post(registerUrl, userData);
  // }
  constructor(private http:HttpClient) { }
  registerUserData(data:any)
  {
    console.log("inside User service "+data);
    return this.http.post(this.apiUrl,data)
  }

}

