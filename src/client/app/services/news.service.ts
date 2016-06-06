import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {News} from '../../../models/news.model';

/**
 * This class provides the News service with methods to read all news
 */
@Injectable()
export class NewsService {

  /**
   * The array of initial names provided by the service.
   * @type {Array}
   */
  news: News[] = [];

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private request: Observable<News[]>;

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
  get(): Observable<News[]> {
    if (this.news && this.news.length) {
      console.log(this.news);
      return Observable.from([this.news]);
    }
    if (!this.request) {
      this.request = this.http.get('/api/news')
        .map((response: Response) => response.json())
        .map((data: News[]) => {
          this.request = null;
          return this.news = data;
        });
    }

    return this.request;
  }
}
