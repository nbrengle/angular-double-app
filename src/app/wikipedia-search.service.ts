import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';

@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp: Jsonp ) { }

  getWikiSearch(query: string) {
    var search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', query);
    search.set('format', 'json');
    return this.jsonp
                    .get(`http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`, { search })
                    .toPromise()
                    .then((request) => request.json()[1]);
  }

}
