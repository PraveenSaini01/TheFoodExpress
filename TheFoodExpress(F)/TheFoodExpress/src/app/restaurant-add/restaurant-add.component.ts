import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { TokenInterceptorService } from '../service/token-interceptor.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent {

//   restaurant = {
//     restaurantId: '',
//     restaurantName: '',
//     description: '',
//     location: '',
//     rating: '',
//     restaurantImage: '',
//   };
// constructor(private route:Router){}
//   onSubmit() {
//     // Handle form submission logic here
//     console.log('Restaurant details submitted:', this.restaurant);
//     this.route.navigateByUrl("/restaurant-list")
//   }
constructor(private fb:FormBuilder,private service:RestaurantService,private route:Router,
  private tokenService:TokenInterceptorService){}

role = this.tokenService.getUserEmail();

userLoggedIn?:string;
restaurants:any=[];

addform = this.fb.group({
  restaurantId: ['', Validators.required],
  restaurantName: ['', Validators.required],
  imageUrl: ['', Validators.required],
  location: ['', Validators.required],
  description: ['', Validators.required],
  rating: ['', Validators.required],
});


addRestaurant(){
  console.log(this.role)
if(this.role === "admin@gmail.com"){
  if(this.addform.valid){
    this.service.registerRestaurant(this.addform.value).subscribe(
      response=>{
        alert(`restaurant is added successfully `+response);
        this.service.updated.emit(true);
        this.addform.reset();
        this.route.navigateByUrl("/restaurant-list");
      },
      error=>{
        alert('add all the particulars '+ error);
      }
    )
  }
}else{
  alert("You are not authorized to add or delete "+Error);

}

}

update(){
// if(this.addform.valid){
//     this.service.updateRestaurant(this.addform.value,this.addform.value.restaurantId).subscribe(
//       response=>{
//         alert(`restaurant has been updated`);
//         this.service.updated.emit(true);
//         this.addform.reset();
//       },
//       error=>{
//         alert(`update is not possible`);
//       }
//     )
//}
}

// view(){
// this.route.navigateByUrl('/restaurantView')
// }

// addItem(){
// const id=1;
// this.service.getId(id);
// this.addform.reset();
// this.route.navigateByUrl('/adminAddItem');
// }

}
