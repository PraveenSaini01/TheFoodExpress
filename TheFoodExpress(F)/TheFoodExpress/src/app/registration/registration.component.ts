// registration.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //userForm: FormGroup;

  constructor(private userService: UserService,private route : Router) {}
    userForm = new FormGroup({

      password:new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/)]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
    
    });

  get email(){
    return this.userForm.get('emailId');
  }

  get password(){
    return this.userForm.get('password');
  }
  // get role(){
  //   return this.userForm.get('role');
  // }
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      // Call your service to handle registration
      console.log(this.userForm.value)
      this.userService.registerUserData(this.userForm.value).subscribe(
        (response) => {
          console.log('User registration successful:', response);
          // Optionally, reset the form after successful registration
          this.userForm.reset();
          this. route.navigateByUrl("") ;
        },
        (error) => {
          console.error('Error during user registration:', error);
        }
      );
    }
  }
}









    // this.registrationForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //     // Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    //   password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    //   role: ['', [Validators.required]],
    //   address: this.fb.group({
    //     houseNo: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    //     city: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
    //     street: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
    //     postalCode: ['', [Validators.required, Validators.pattern('^\\d{6}$')]]
    //   })
    // });

  // ngOnInit(): void {
  // }


  // registerUser() {
  //   console.log("hello");
  //   if (this.registrationForm.valid) {
  //     const userData = {
  //       ...this.registrationForm.value,
  //       userEmail: this.registrationForm.get('email')?.value || ''
  //     };

  //     console.log('User Data:', userData);

  //     this.userService.registerUser(userData).subscribe(
  //       (response: any) => {
  //         console.log('User registered successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error during registration:', error);
  //       }
  //     );
  //   }
  // }








