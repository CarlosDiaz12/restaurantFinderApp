import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
      <div class="card card-danger">
        <div class="card-body">
          <h2 class="card-title">Error 404</h2>
          <h5 class="card-text">Page Not Found</h5>
        </div>
      </div>
  `,
  styles: []
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
