import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewRoutingModule } from 'src/app/search-view/search-view-routing.module';
import { TvShowTableComponent } from 'src/app/tv-show/tv-show-table/tv-show-table.component';
import { SearchViewComponent } from 'src/app/search-view/search-view.component';
import { FormsModule } from '@angular/forms';
import { IsFavoriteDirective } from 'src/app/shared/directives/favorite-tv-show/is-favorite.directive';



@NgModule({
  declarations: [
    TvShowTableComponent,
    SearchViewComponent,
    IsFavoriteDirective
  ],
  imports: [
    CommonModule,
    SearchViewRoutingModule,
    FormsModule
  ]
})
export class SearchViewModule { }
