import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FavoriteTvShowFacade } from 'src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service';
import { TvShowFacade } from 'src/app/shared/services/facade/tv-show/tv-show.facade';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  tvShows$: Observable<TvShow[]> | null = null; //list of TvShow objects
  isUpdating$!: Observable<boolean>; //used for showing/hiding loading spinner
  titles = [
    'Name',
    'Country',
    'Year Started',
    'Status',
    'Actions'
  ];
  name: string = '';

  constructor(private tvShowFacade: TvShowFacade, private favoriteTvShowFacade: FavoriteTvShowFacade, private router: Router) {}

  ngOnInit() {
    this.isUpdating$ = this.tvShowFacade.isUpdating$();
    this.tvShows$  = this.tvShowFacade.loadTvShows();
  }

  searchByName(name: string) {
    this.tvShows$ = this.tvShowFacade.loadTvShows(name);
  }

  onFavoriteToggled(tvShow: TvShow) {
    // Toggle the favorite status for the TV show using the facade
    this.favoriteTvShowFacade.toggleFavorite(tvShow);
  }

  onTvShowDetailsClicked(id: number): void {
    this.router.navigate(['/tv-show', id]);
  }
}
