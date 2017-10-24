import { Injectable } from '@angular/core';
import {  URLSearchParams, Http } from '@angular/http';

@Injectable()
export class GiphySearchService {
  giphy_key = 'PZmdd3dIaB7O5a8w41ibReTnpLTDT4ki';

  constructor(private http: Http) { }

  getGiphySearch(query: string) {
      var search = new URLSearchParams();
      search.set('api_key', this.giphy_key);
      search.set('q', query);
      search.set('limit', '5');
      search.set('offset', '0');
      search.set('rating', 'G');
      search.set('lang', 'en');
      return this.http
                    .get(`https://api.giphy.com/v1/gifs/search`, { search })
                    .toPromise()
                    .then((request) => request.json().data);
  }

}
