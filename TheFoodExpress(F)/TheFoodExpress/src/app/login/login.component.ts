// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../service/auth.service';
// import { Route, Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { TokenInterceptorService } from '../service/token-interceptor.service';
// import { SessionLogService } from '../service/sessionlog.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   [x: string]: any;

//   loginForm!: FormGroup;
//   //isLoggedIn: boolean=false;

//   responseData:any;
//   userRole:any;

//   constructor(private formBuilder: FormBuilder,private authService:AuthService,
//     private route:Router,private _sanckBar:MatSnackBar,private tokenService:TokenInterceptorService
//    ) {}

//   ngOnInit(): void {
//     this.initLoginForm();
//   }

//   initLoginForm(): void {
//     this.loginForm = this.formBuilder.group({
//       emailId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
//       password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],

//     });
//   }


//   loginUser(): void {
//     if (this.loginForm.valid) {

//         // Call your service to handle registration
//         console.log(this.loginForm.value)
//         const userData={
//           emailId:this.loginForm.value.emailId,
//           password:this.loginForm.value.password
//         }
//         this.authService.loginUser(userData).subscribe({
//          next:response => {
//             console.log(response)
//            if(response){
//             localStorage.setItem('token',response);

//             const email = this.tokenService.getUserEmail();
//             console.log(email);

//             if(email==="admin@gmail.com" ){
//               console.log("if");
//               this.route.navigateByUrl('/admin');
//               this.authService.isAuthenticatedUser();

//             }else{
//               console.log("else");
//               this.authService.isAuthenticatedUser();
//             this.route.navigateByUrl("/restaurent-list");
//             }

//             this._sanckBar.open('Logged In successfully.....', 'success', {
//               duration: 3000,
//               panelClass: ['mat-toolbar', 'mat-primary']
//             });
//           }},
//           error:(err) => {
//             console.error('Error during login:', err);
//           }
//     });
//       }
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenInterceptorService } from '../service/token-interceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private _sanckBar: MatSnackBar,
    private tokenService: TokenInterceptorService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      emailId: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],
      ],
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      const userData = {
        emailId: this.loginForm.value.emailId,
        password: this.loginForm.value.password,
      };

      this.authService.loginUser(userData).subscribe({
        next: (response) => {
          console.log(response);
          if (response) {
            localStorage.setItem('token', response);

            const email = this.tokenService.getUserEmail();
            console.log(email);

            if (email === 'admin@gmail.com') {
              console.log('if');
              this.authService.setUserEmail(email);
              this.route.navigateByUrl('/admin');
            } else {
              console.log('else');
              this.authService.setUserEmail(email);
              this.route.navigateByUrl('/restaurant-list');
            }

            this._sanckBar.open('Logged In successfully.....', 'success', {
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary'],
            });
          }
        },
        error: (err) => {
          console.error('Error during login:', err);
        },
      });
    }
  }
}
