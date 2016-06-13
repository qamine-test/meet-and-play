import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

import {PlayerResponse} from '../../../models/response.model';

/**
 * This class provides the News service with methods to read all news
 */
@Injectable()
export class ResponseService {

  /**
   * The array of initial names provided by the service.
   * @type {Array}
   */
  responses:PlayerResponse[] = [];

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private request:Observable<PlayerResponse[]>;

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private deleteRequest:Observable<any>;

  /**
   * Creates a new NewsService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http:Http) {
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource. If there was a previous successful request
   * (the local names array is defined and has elements), the cached version is returned
   * @return {string[]} The Observable for the HTTP request.
   */
  get():Observable<PlayerResponse[]> {
    if (!this.request) {
      this.request = this.http.get('/api/response')
        .map((response:Response) => response.json())
        .map((data:PlayerResponse[]) => {
          this.request = null;
          return this.responses = data;
        });
    }

    return this.request;
  }

  deleteAll():Observable<any> {
    this.deleteRequest = this.http.delete('/api/response')
      .map((response:Response) => response.json())
      .map((data:PlayerResponse[]) => {
        this.deleteRequest = null;
        return this.responses = [];
      });

    return this.deleteRequest;
  }

  addResponse(playerResponse: PlayerResponse):Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/response', JSON.stringify(playerResponse), options)
      .map((response:Response) => response.json())
      .map((data:PlayerResponse[]) => {
        return this.responses = [];
      });
  }
}
