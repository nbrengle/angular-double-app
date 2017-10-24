import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchPaneComponent } from './search-pane/search-pane.component';
import { WikipediaSearchService } from './wikipedia-search.service';
import { GiphySearchService } from './giphy-search.service';
import { SearchHistoryService } from './search-history.service';

const appRoutes: Routes = [
    {path: '', component: SearchPaneComponent, pathMatch: 'full' },
    {path: 'search', component: SearchPaneComponent },
    {path: 'saerch', redirectTo: 'search' },
    {path: 'search-history', component: SearchHistoryComponent },
    {path: 'saerch-history', redirectTo: 'search-history' },
    {path: '**', redirectTo: 'search' },
]

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [WikipediaSearchService, GiphySearchService, SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
