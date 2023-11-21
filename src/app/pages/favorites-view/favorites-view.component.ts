import { Component, Input } from '@angular/core';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';
import { FavoriteTvShowFacade } from 'src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {

  @Input()
  tvShowDetails!: TvShowDetails[];

  constructor(private favoriteTvShowFacade: FavoriteTvShowFacade) { }

  onTvBookmarkClicked(tvShow: TvShow): void {
    this.favoriteTvShowFacade.toggleFavorite(tvShow);
  }

}
