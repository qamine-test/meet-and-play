import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ResponseService} from "../../services/response.service";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ip-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class NavbarComponent {
  constructor(public responseService: ResponseService) {}
  deleteResponses() {
    this.responseService.deleteAll().subscribe();
  }
}
