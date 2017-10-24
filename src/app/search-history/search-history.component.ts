import { Component, OnInit } from '@angular/core';
import { Search } from '../search.model';
import { SearchHistoryService } from '../search-history.service';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searchHistory: Search[];

  constructor(private searchHistoryService: SearchHistoryService) {
      this.searchHistory = searchHistoryService.getHistory();
  }

  ngOnInit() {
  }

}
