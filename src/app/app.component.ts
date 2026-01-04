declare let $: any;
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterOutlet, Router, NavigationCancel, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'oropos';
  routerSubscription: any;
  location: any;



}
