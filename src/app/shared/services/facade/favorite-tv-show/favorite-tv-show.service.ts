import { Injectable } from "@angular/core";
import { Observable, catchError, filter, forkJoin, map, mergeMap, of, tap } from "rxjs";
import { TvShowDetails } from "src/app/components/tv-show/models/tv-show-details.model";
import { TvShow } from "src/app/components/tv-show/models/tv-show.model";
import { TvShowApiService } from "src/app/shared/services/api/tv-show/tv-show.api.service";
import { FavoriteTvShowStateService } from "src/app/shared/services/state/favorite-tv-show/favorite-tv-show.service";


@Injectable({
  providedIn: 'root',
})
export class FavoriteTvShowFacade {
  constructor(private favoriteTvShowStateService: FavoriteTvShowStateService, private tvShowApiService: TvShowApiService ) {}

  // Toggle a TV show as a favorite
  toggleFavorite(tvShow: TvShow): void {
    this.favoriteTvShowStateService.toggleFavorite(tvShow);
  }

  // Check if a TV show is marked as a favorite
  isFavorite(tvShowId: number): boolean {
    return this.favoriteTvShowStateService.isFavorite(tvShowId);
  }

  fetchFavorites(ids: number[]): Observable<TvShowDetails[]> {
    const observables: Observable<TvShowDetails>[] = ids.map(id => this.fetchFavorite(id));

    return forkJoin(observables).pipe(
      mergeMap(() => this.getFavorites())
    );
  }

  fetchFavorite(id: number): Observable<TvShowDetails> {
     // Check if data exists in the cache
     const cachedData = this.favoriteTvShowStateService.getCachedFavoriteSnapshot();
     const cachedItem = cachedData.get(id);

     if (cachedItem) {
       return of(cachedItem);
     }

     // If not in cache, fetch data and update the cache
     return this.tvShowApiService.getTvShowDetail(id).pipe(
       map((response) => response.tvShow),
       catchError((error: any) => {
         console.error('Error fetching data:', error);
         return of(null);
       }),
       filter((newData: TvShowDetails | null): newData is TvShowDetails => newData !== null), // Filter out null values
       tap((newData: TvShowDetails) => {
           this.favoriteTvShowStateService.updateCachedFavorite(id, newData);
       })
     );
   }

   getFavorites(): Observable<TvShowDetails[]> {
    return this.favoriteTvShowStateService.getCachedFavorites();
   }

   getCachedFavoriteSnapshot(): Map<number, TvShowDetails> {
    return this.favoriteTvShowStateService.getCachedFavoriteSnapshot();
   }

   removeFavorite(id: number) {
    this.favoriteTvShowStateService.removeCachedFavorite(id);
   }
}


