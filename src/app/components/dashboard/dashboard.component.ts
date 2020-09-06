import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { IRestaurant } from 'src/app/models/restaurant';
import { ICity } from 'src/app/models/city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  restaurants: IRestaurant[] = [];
  filteredRestaurants: IRestaurant[] = [];
  selectedCity = 'Miami';
  cities: ICity[] = [];
  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadRestaurantList(this..selectedCity); i do that in a resolve route method
    this.restaurants = this.route.snapshot.data.restaurants;
    this.loadAllCities();
  }

  selectChanged(selectedCity: string): void {
    this.selectedCity = selectedCity;
    this.loadRestaurantList(this.selectedCity);
  }
  loadAllCities(): void {
    this.dashboardService.getAllCities().subscribe({
      next: data => {
        this.cities = data.cities;
        // console.log(data);
      }
    });
  }

  loadRestaurantList(cityName: string): void {
    this.dashboardService.getRestaurants('city', cityName).subscribe({
      next: data => {
        // console.log(data.restaurants);
        this.restaurants = data.restaurants;
        // this.filteredRestaurants = this.restaurants;
      } ,
      error: err => console.log(err)
    });
  }

}
