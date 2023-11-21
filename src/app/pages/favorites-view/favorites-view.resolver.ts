import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TvShowDetails } from "src/app/components/tv-show/models/tv-show-details.model";
import { FavoriteTvShowFacade } from "src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service";



export function favoritesResolver(): Observable<TvShowDetails[] | null> {

  const storedFavorites = inject(FavoriteTvShowFacade).getCachedFavoriteSnapshot();
  const localFavorites: number[]  = JSON.parse(localStorage.getItem('favoriteShows') || '');
  console.log(storedFavorites);
  console.log(localFavorites);
    if (storedFavorites.size === 0) {
      if (!localFavorites.length) return inject(FavoriteTvShowFacade).getFavorites();

      return inject(FavoriteTvShowFacade).fetchFavorites(localFavorites);
    } else {
      const storedFavoriteIds: number[] = Array.from(storedFavorites.keys());
      const newIds: number[] = localFavorites.filter(id => !storedFavoriteIds.includes(id));
      if (newIds.length) {
        return inject(FavoriteTvShowFacade).fetchFavorites(newIds);
      } else {
        return inject(FavoriteTvShowFacade).getFavorites();
      }
    }
}
