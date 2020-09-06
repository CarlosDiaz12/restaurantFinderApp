import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResturantDetailsComponent } from './components/resturant-details/resturant-details.component';
import { ErrorPageComponent } from './shared/error-page.component';
import { EventRouteActivatorGuard } from './components/resturant-details/event-route-activator.guard';
import { RestaurantListResolverService } from './services/restaurant-list-resolver.service';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, resolve: {restaurants: RestaurantListResolverService }},
  { path: 'details/:id', component: ResturantDetailsComponent,
   canActivate: [EventRouteActivatorGuard], canDeactivate: [EventRouteActivatorGuard]},
  { path: '404', component: ErrorPageComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
