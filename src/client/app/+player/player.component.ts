import { Component } from '@angular/core';
import {PlayerService} from "../services/player.service";
import {MATERIAL_DIRECTIVES} from 'ng2-material';

@Component({
  moduleId: module.id,
  selector: 'ip-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css'],
  directives: [MATERIAL_DIRECTIVES]
})
/**
 * This class represents the PlayerComponent.
 */
export class PlayerComponent {
  constructor(public playerService: PlayerService) {}

  onPositionChange(position) {
    this.playerService.filter(position);
  }
  
  onProjectionChange(age) {
    this.playerService.projection(+age);
  }
}
