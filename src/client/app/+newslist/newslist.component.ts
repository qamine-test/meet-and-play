import { Component } from '@angular/core';

import {NewsService} from "../services/news.service";

/**
 * This class represents the NewslistComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ip-newslist',
  templateUrl: 'newslist.component.html',
  styleUrls: ['newslist.component.css']
})
export class NewslistComponent {
  constructor(public newsService: NewsService) {}
}
