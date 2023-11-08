import { Injectable } from "@angular/core";
import { FavoriteTvShowStateService } from "src/app/shared/services/state/favorite-tv-show/favorite-tv-show.service";


@Injectable({
  providedIn: 'root',
})
export class FavoriteTvShowFacade {
  constructor(private favoriteTvShowStateService: FavoriteTvShowStateService ) {}

  // Toggle a TV show as a favorite
  toggleFavorite(tvShowId: number): void {
    this.favoriteTvShowStateService.toggleFavorite(tvShowId);
  }

  // Check if a TV show is marked as a favorite
  isFavorite(tvShowId: number): boolean {
    return this.favoriteTvShowStateService.isFavorite(tvShowId);
  }

}
