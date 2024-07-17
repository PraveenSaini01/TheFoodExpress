import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-restaurent-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})


export class RestaurentCardComponent implements OnInit {
[x: string]: any;

  @Input()
  rest?: Restaurant;
  constructor() { }

  ngOnInit(): void {

  }
  }



