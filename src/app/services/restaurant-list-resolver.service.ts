import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { map, toArray } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestaurantListResolverService implements Resolve<any> {

  constructor(private dashboardService: DashboardService) { }
  resolve() {
    // we return the observable to angular and not use subscribe method,
    // because subscribe return a subscription not an observable
    return this.dashboardService.getRestaurants('city', 'Miami').pipe(map(data => {
      return data.restaurants;
    }));
  }
}
