import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
import { IRestaurant } from 'src/app/models/restaurant';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorGuard implements CanActivate, CanDeactivate<boolean> {
  constructor(private dashboardService: DashboardService, private router: Router) { }

// this function triggers when i try to get out of a specific route
  canDeactivate(): boolean {
    // here goes the logic to ask the user if they want to exit without soing some stuffs (like saving something)
    return false;
}

   // tslint:disable-next-line: ban-types
   // this function triggers when i try to reach a specific route
   canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const resId = +route.params.id;
     // let resExists: boolean;
      return this.dashboardService.getRestaurant(resId).pipe(
        map(res => {
        if (res) {  return true; }
        }
      ),
      catchError(err => {
        this.router.navigate(['/404']);
        return of(false);
      })
      );

      // return resExists;
  }

}
