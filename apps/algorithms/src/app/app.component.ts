import { Component, ChangeDetectorRef } from '@angular/core';
import { routes } from './app-routing.module';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'computer-science-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = routes.filter(_ => _?.data?.label);

  section = '';

  constructor(public router: Router, private cd: ChangeDetectorRef) {
    this.router.events
        .pipe(filter(_ => _ instanceof ActivationEnd))
        .subscribe((_: ActivationEnd) => {
          this.section = _.snapshot.data.label;
          this.cd.markForCheck();
        });
  }
}
