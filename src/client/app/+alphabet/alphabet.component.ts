import { Component } from '@angular/core';
import {AlphabetService} from "../services/alphabet.service";
import {Letter} from '../../../models/letter.model';

@Component({
  moduleId: module.id,
  selector: 'ip-alphabet',
  templateUrl: 'alphabet.component.html',
  styleUrls: ['alphabet.component.css']
})
/**
 * This class represents the AlphabetComponent.
 */
export class AlphabetComponent {
  currentLetter : Letter;
  constructor(public alphabetService: AlphabetService) {
    this.currentLetter = alphabetService.get().shift();
  }
  
  next() {
    this.currentLetter = this.alphabetService.get().shift();
  }
}
