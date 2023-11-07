import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewRoutingModule } from 'src/app/search-view/search-view-routing.module';
import { TvShowTableComponent } from 'src/app/tv-show/tv-show-table/tv-show-table.component';
import { SearchViewComponent } from 'src/app/search-view/search-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TvShowTableComponent, SearchViewComponent],
  imports: [
    CommonModule,
    SearchViewRoutingModule,
    FormsModule
  ]
})
export class SearchViewModule { }
