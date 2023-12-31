import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewRoutingModule } from 'src/app/pages/search-view/search-view-routing.module';
import { TvShowTableComponent } from 'src/app/components/tv-show/tv-show-table/tv-show-table.component';
import { SearchViewComponent } from 'src/app/pages/search-view/search-view.component';
import { FormsModule } from '@angular/forms';
import { IsFavoriteDirective } from 'src/app/shared/directives/favorite-tv-show/is-favorite.directive';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';



@NgModule({
  declarations: [
    TvShowTableComponent,
    SearchViewComponent,
    PaginatorComponent,
    IsFavoriteDirective
  ],
  imports: [
    CommonModule,
    SearchViewRoutingModule,
    FormsModule
  ]
})
export class SearchViewModule { }
