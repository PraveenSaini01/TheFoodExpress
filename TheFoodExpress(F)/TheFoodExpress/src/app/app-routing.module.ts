// import { Component, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RegistrationComponent } from './registration/registration.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
// import { RestaurentCardComponent } from './restaurant-card/restaurant-card.component';
// import { FoodListComponent } from './food-list/food-list.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'registration', component: RegistrationComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'restaurantId/:foods', component:FoodListComponent },
//   {path:'restaurent/:id',component:RestaurentListComponent},
//   {path:'restaurent-card',component:RestaurentCardComponent},

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { RestaurentCardComponent } from './restaurant-card/restaurant-card.component';
import { FoodListComponent } from './food-list/food-list.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './service/auth.guard';
import { AdminRestaurantViewComponent } from './admin-restaurant-view/admin-restaurant-view.component';
import { AdminFoodItemComponent } from './admin-food-item/admin-food-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food-list', component: FoodListComponent },
  { path: 'adminFoodItem', component: AdminFoodItemComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurantId/foodMenu', component: FoodListComponent },
  { path: 'restaurant-list', component: RestaurentListComponent },
  { path : 'restaurent/:id', component:RestaurentCardComponent},
  { path:'restaurant-add',component:RestaurantAddComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuardGuard]},
  {path:"adminRestaurantView",component:AdminRestaurantViewComponent,canActivate:[AuthGuardGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
