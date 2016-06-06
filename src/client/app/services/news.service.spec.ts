import { provide, ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, HTTP_PROVIDERS, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { NewsService } from './news.service';
import { News } from '../../../models/news.model';

export function main() {
  describe('News Service', () => {
    let newsService: NewsService;
    let backend: MockBackend;
    let initialResponse: any;

    beforeEach(() => {
      let injector = ReflectiveInjector.resolveAndCreate([
        HTTP_PROVIDERS,
        NewsService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
          useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }),
      ]);
      newsService = injector.get(NewsService);
      backend = injector.get(MockBackend);

      let connection: any;
      backend.connections.subscribe((c: any) => connection = c);
      initialResponse = newsService.get();
      connection.mockRespond(new Response(new ResponseOptions({
        body: '[{"_id": "1", "title": "Опасности нарушения корпоративной политики безопасности", "body": "", "publishingDate": new Date("April 1, 2016 11:13:00")}, {"_id": "2", "title": "Познакомьтесь с Геннадием Черкесом: техническим директором ISSoft", "body": "", "publishingDate": new Date("March 20, 2016 11:13:00")}]' })));
    });

    it('should return an Observable when get called', () => {
      expect(initialResponse).toEqual(jasmine.any(Observable));
    });

    it('should resolve to list of news when get called', () => {
      let news: News[];
      initialResponse.subscribe((data: any) => news = data);
      expect(news.length).toEqual(2);
    });
  });
}
