import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ThemeModule } from './shared/theme.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { FormsModule } from '@angular/forms';
import { ResturantDetailsComponent } from './components/resturant-details/resturant-details.component';
import { ErrorPageComponent } from './shared/error-page.component';
import { RestaurantListResolverService } from './services/restaurant-list-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    RestaurantCardComponent,
    ResturantDetailsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
