import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
import { IRestaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.css']
})
export class ResturantDetailsComponent implements OnInit {
  restaurantId: number;
  restaurant: IRestaurant;
  constructor(private route: ActivatedRoute, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.restaurantId = +this.route.snapshot.params.id;
    // console.log(this.restaurantId);
    // this to retrieve one restaurant using the service
   // this.dashboardService.getRestaurants(this.restaurantId)
  }

}
