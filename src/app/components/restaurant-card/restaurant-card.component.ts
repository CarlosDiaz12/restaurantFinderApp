import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IRestaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit, OnChanges {
  restaurant: IRestaurant;
  hovered = false;
  @Input() extRestaurant: IRestaurant;
  constructor() { }

  ngOnChanges() {
    this.restaurant = this.extRestaurant;
  }

  ngOnInit() {
  }

  // onMouseOver(event: any): void {
  //   this.hovered = !this.hovered;
  // }
}
