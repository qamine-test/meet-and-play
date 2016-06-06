import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {Player} from '../../../models/player.model';

/**
 * This class provides the News service with methods to read all news
 */
@Injectable()
export class PlayerService {

  /**
   * The array of initial names provided by the service.
   * @type {Array}
   */
  players: Player[] = [];
  filteredPlayers: Player[] = [];

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private request: Observable<Player[]>;

  /**
   * Creates a new NewsService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource. If there was a previous successful request
   * (the local names array is defined and has elements), the cached version is returned
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<Player[]> {
    if (this.players && this.players.length) {
      return Observable.from([this.filteredPlayers]);
    }
    if (!this.request) {
      this.request = this.http.get('/api/players')
        .map((response: Response) => response.json())
        .map((data: Player[]) => {
          this.request = null;
          this.players = data;
          this.players = data.map(function(player:Player){
            player.overall = 0;
            if(player.position === 'G') {
              player.overall = player.goalie + player.technique + player.pass;
            }
            if(player.position === 'RD' || player.position === 'LD' || player.position === 'UD') {
              player.overall = player.defence + player.shot + player.technique + player.aggression + player.pass;
            }
            if(player.position === 'RW' || player.position === 'LW' || player.position === 'UW') {
              player.overall = player.attack + player.shot + player.technique + player.aggression;
            }
            if(player.position === 'C') {
              player.overall = player.attack + player.shot + player.technique + player.pass;
            }
            return player;
          });
          this.players.sort(function(playerOne, playerTwo) {
            if(playerOne.overall > playerTwo.overall) {
              return -1;
            } else if(playerOne.overall < playerTwo.overall) {
              return 1;
            } else {
              return 0;
            }

          });

          return this.filteredPlayers = this.players;
        });
    }

    return this.request;
  }

  filter(position: string){
    if (this.players && this.players.length) {
      this.filteredPlayers = this.players.filter(function (player) {
        return player.position === position;
      });
    }
  }
  projection(age: number) {
    if (this.filteredPlayers && this.filteredPlayers.length) {
      this.filteredPlayers = this.filteredPlayers.map(function (player) {
        player.overall = 0;
        if(player.position === 'G') {
          player.overall = player.goalie + player.technique + player.pass;
        }
        if(player.position === 'RD' || player.position === 'LD' || player.position === 'UD') {
          player.overall = player.defence + player.shot + player.technique + player.aggression + player.pass;
        }
        if(player.position === 'RW' || player.position === 'LW' || player.position === 'UW') {
          player.overall = player.attack + player.shot + player.technique + player.aggression;
        }
        if(player.position === 'C') {
          player.overall = player.attack + player.shot + player.technique + player.pass;
        }
        if(player.age < age) {
          player.overall += 130 * (age - player.age);
        }
        return player;
      });
      this.filteredPlayers.sort(function(playerOne, playerTwo) {
        if(playerOne.overall > playerTwo.overall) {
          return -1;
        } else if(playerOne.overall < playerTwo.overall) {
          return 1;
        } else {
          return 0;
        }

      });
    }

  }
}
