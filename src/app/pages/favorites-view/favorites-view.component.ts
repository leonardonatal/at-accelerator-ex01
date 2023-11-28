import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';
import { FavoriteTvShowFacade } from 'src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent implements OnInit{


  tvShowDetails$!: Observable<TvShowDetails[]>;

  constructor(private favoriteTvShowFacade: FavoriteTvShowFacade) { }

  onTvBookmarkClicked(tvShow: TvShow): void {
    this.favoriteTvShowFacade.toggleFavorite(tvShow);
  }

  ngOnInit(): void {
    this.tvShowDetails$ = this.getFavorites();
  }

  getFavorites(): Observable<TvShowDetails[]> {
    const storedFavorites = this.favoriteTvShowFacade.getCachedFavoriteSnapshot();
    const localFavorites: number[]  = JSON.parse(localStorage.getItem('favoriteShows') || '');
    console.log(storedFavorites);
    console.log(localFavorites);
      if (storedFavorites.size === 0) {
        if (!localFavorites.length) return this.favoriteTvShowFacade.getFavorites();

        return this.favoriteTvShowFacade.fetchFavorites(localFavorites);
      } else {
        const storedFavoriteIds: number[] = Array.from(storedFavorites.keys());
        const newIds: number[] = localFavorites.filter(id => !storedFavoriteIds.includes(id));
        if (newIds.length) {
          return this.favoriteTvShowFacade.fetchFavorites(newIds);
        } else {
          return this.favoriteTvShowFacade.getFavorites();
        }
      }
  }

}
