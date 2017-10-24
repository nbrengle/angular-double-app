import { Injectable } from '@angular/core';
import { Search } from './search.model'

@Injectable()
export class SearchHistoryService {
  searchHistory: Array<Search>;

  constructor() {
      this.searchHistory = [];
  }

  getHistory() {
      return this.searchHistory;
  }

  addSearchToHistory(searchText: string) {
      let newSearch = new Search(searchText);
      this.searchHistory.push(newSearch);
  }

}
