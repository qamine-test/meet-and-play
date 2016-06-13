import { Component } from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';

@Component({
  moduleId: module.id,
  selector: 'ip-standings',
  templateUrl: 'standings.component.html',
  styleUrls: ['standings.component.css'],
  directives: [MATERIAL_DIRECTIVES]
})
/**
 * This class represents the StandingsComponent.
 */
export class StandingsComponent {
  players: Array<any> = [
    {'id': 1, 'name': 'Леша', 'points': 25},
    {'id': 2, 'name': 'Маша', 'points': 20},
    {'id': 3, 'name': 'Катя', 'points': 18}
  ]
}
