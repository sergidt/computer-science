import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'computer-science-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = routes.filter(_ => _?.data?.label);

  constructor() {
    console.log(this.routes);
  }
}
