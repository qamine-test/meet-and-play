import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import {NewslistComponent} from '../+newslist/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ip-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [FORM_DIRECTIVES, NewslistComponent]
})
export class HomeComponent {

  constructor() {}

}
