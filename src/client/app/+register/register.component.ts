import { Component } from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {ResponseService} from "../services/response.service";
import {PlayerResponse} from "../../../models/response.model";

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
  playerResponse : PlayerResponse = {name:''};
  constructor(public responseService: ResponseService) {}
  sendResponse() {
    this.responseService.addResponse(this.playerResponse).subscribe();
  }
}
