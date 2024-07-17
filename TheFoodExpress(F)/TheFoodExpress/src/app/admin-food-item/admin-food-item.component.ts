import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';
import { TokenInterceptorService } from '../service/token-interceptor.service';

@Component({
  selector: 'app-admin-food-item',
  templateUrl: './admin-food-item.component.html',
  styleUrls: ['./admin-food-item.component.css']
})
export class AdminFoodItemComponent   {

  constructor(private fb:FormBuilder,private service:RestaurantService,private route:Router,
    private tokenService:TokenInterceptorService){}


  role = this.tokenService.getUserEmail();

  userLoggedIn?:string;
  restaurants:any=[];

  addform = this.fb.group({
    // Define your form controls here
    restaurantId: ['', Validators.required],
    itemId: ['', Validators.required],
    itemName: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
    price: ['', Validators.required],
  });


  addFoodMenuItem() {
    console.log(this.role)
    if (this.role === "admin@gmail.com") {
      if (this.addform.valid) {
        const restaurantId = this.addform.get('restaurantId').value; // Get restaurantId from form
        const foodMenuItem = this.addform.value; // Get other form values
        this.service.registerFoodMenuItem(restaurantId, foodMenuItem).subscribe(
          response => {
            alert('Food menu item registered successfully:' + response); // Use console.log for logging
            this.service.updated.emit(true);
            this.addform.reset();
            this.route.navigateByUrl("/food-list");
          },
          error => {
            alert('Failed to register food menu item. Please try again.');
          }
        );
      } else {
        alert('Please fill in all required fields');
      }
    }
  }



update(){

}


}
