import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ErrorPageComponent } from './error-page.component';
@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ThemeModule { }
