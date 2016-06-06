import { Component } from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'ip-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  directives: [MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
/**
 * This class represents the RegisterComponent.
 */
export class RegisterComponent {
}
