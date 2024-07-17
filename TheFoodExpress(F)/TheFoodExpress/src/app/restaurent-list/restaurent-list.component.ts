

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';
import { Food } from '../model/food';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css'],
})
export class RestaurentListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  filteredFoods: Food[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantService.getAllRestaurants().subscribe({
      next: (data: Restaurant[]) => {
        this.restaurants = data;
        this.route.paramMap.subscribe((params) => {
          const restaurantId = params.get('restaurantId');
          this.getRestaurant(restaurantId);
        });
      },
      error: (err: any) => {
        console.error(err); // Log the error instead of showing an alert
      }
    });
  }

  private getRestaurant(restaurantId: string | null): void {
    if (restaurantId) {
      this.restaurantService.getFoodListForRestaurant(restaurantId).subscribe({
        next: (foods: Food[]) => {
          this.filteredFoods = foods;
        },
        error: (err: any) => {
          console.error(err); // Log the error instead of showing an alert
        }
      });
    } else {
      this.filteredFoods = [];
    }
  }
}
