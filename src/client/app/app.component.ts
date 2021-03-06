import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { MelodyComponent } from './+melody/index';
import { AlphabetComponent } from './+alphabet/index';
import { RegisterComponent } from './+register/index';
import { StandingsComponent } from './+standings/index';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {NewsService} from "./services/news.service";
import {AlphabetService} from "./services/alphabet.service";
import {PlayerService} from "./services/player.service";
import {ResponseService} from "./services/response.service";
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 'ip-app',
  viewProviders: [HTTP_PROVIDERS, NewsService, PlayerService, AlphabetService, ResponseService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent, MD_SIDENAV_DIRECTIVES, StandingsComponent]
})
@Routes([
  {
    path: '/',
    component: MelodyComponent
  },
  {
    path: '/alphabet',
    component: AlphabetComponent
  },
  {
    path: '/register',
    component: RegisterComponent
  }
])
export class AppComponent {}
