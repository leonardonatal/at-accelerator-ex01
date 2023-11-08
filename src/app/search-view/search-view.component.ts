import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteTvShowFacade } from 'src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service';
import { TvShowFacade } from 'src/app/tv-show/facade/tv-show.facade';
import { TvShow } from 'src/app/tv-show/models/tv-show.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  tvShows$: Observable<TvShow[]> | null = null; //list of TvShow objects
  isUpdating: boolean = false; //used for showing/hiding loading spinner
  titles = [
    'Name',
    'Country',
    'Year Started',
    'Status',
    'Actions'
  ];
  name: string = '';

  constructor(private tvShowFacade: TvShowFacade, private favoriteTvShowFacade: FavoriteTvShowFacade) {}

  ngOnInit() {
    this.tvShowFacade.isUpdating$().subscribe({
      next: (isUpdating) => this.isUpdating = isUpdating,
      error: (err) => console.log(err)
    });
    this.tvShowFacade.loadTvShows();
    this.tvShows$ = this.tvShowFacade.getTvShows$();
  }

  searchByName(name: string) {
    this.tvShowFacade.loadTvShows(name);
  }

  onFavoriteToggled(tvShow: TvShow) {
    // Toggle the favorite status for the TV show using the facade
    console.log('heree');
    this.favoriteTvShowFacade.toggleFavorite(tvShow.id);
  }

}
