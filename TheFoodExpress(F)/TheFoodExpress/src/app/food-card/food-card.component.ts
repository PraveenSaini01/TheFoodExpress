import { Component, Input } from '@angular/core';
import { Food } from '../model/food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  @Input() food: Food;

}
