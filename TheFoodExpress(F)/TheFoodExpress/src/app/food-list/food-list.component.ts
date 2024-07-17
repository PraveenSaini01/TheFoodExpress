import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food } from '../model/food';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnDestroy {
  restaurantId: string = '';
  foods: Food[] = [];
  private routeSubscription: Subscription | undefined;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const restaurantId = params.get('restaurantId');
      if (restaurantId) {
        this.restaurantService.getFoodListForRestaurant(restaurantId).subscribe(foods => {
          this.foods = foods;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  getFoodsForRestaurantId(restaurantId: string): void {
    this.restaurantService.getFoodListForRestaurant(restaurantId).subscribe(
      (data: Food[]) => {
        this.foods = data;
      },
      (err: any) => {
        console.error('Error fetching foods:', err);
        alert('Error fetching foods. Please try again later.');
      }
    );
  }
}
