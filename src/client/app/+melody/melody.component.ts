import { Component } from '@angular/core';
import {ResponseService} from "../services/response.service";
import {PlayerResponse} from "../../../models/response.model";


@Component({
  moduleId: module.id,
  selector: 'ip-melody',
  templateUrl: 'melody.component.html',
  styleUrls: ['melody.component.css']
})
/**
 * This class represents the MelodyComponent.
 */
export class MelodyComponent {
  responses: PlayerResponse[] = [];
  constructor(public responseService: ResponseService) {
    this.startRefreshing();
  }
  startRefreshing() {
    setInterval(function(){
      this.responseService.get().subscribe(function (responses){
        this.responses = responses;
        console.log(responses);
      }.bind(this));
    }.bind(this), 200);
  }
}
