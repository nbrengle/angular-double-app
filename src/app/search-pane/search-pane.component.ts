import { Component, Input } from '@angular/core';
import { WikipediaSearchService } from '../wikipedia-search.service';
import { GiphySearchService } from '../giphy-search.service';
import { SearchHistoryService } from '../search-history.service';

@Component({
  selector: 'app-search-pane',
  templateUrl: './search-pane.component.html',
  styleUrls: ['./search-pane.component.css']
})
export class SearchPaneComponent {

    @Input() text: string;

    fromWikipedia: Array<String>;
    fromGiphy: any;

    constructor( private wikipediaService: WikipediaSearchService,
                 private giphyService: GiphySearchService,
                 private searchHistoryService: SearchHistoryService
             ) {}

    search(searchText: string): void {
        this.wikipediaService.getWikiSearch(searchText)
          .then(items => this.fromWikipedia = items)
          .catch(err => console.log(err.message));

        this.giphyService.getGiphySearch(searchText)
          .then(items => this.fromGiphy = items)
          .catch(err => console.log(err.message));

        this.searchHistoryService.addSearchToHistory(searchText);
    }

}
