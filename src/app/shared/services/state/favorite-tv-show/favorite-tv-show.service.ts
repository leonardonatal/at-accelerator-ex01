import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, map, shareReplay } from 'rxjs';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';
import { LocalstorageService } from 'src/app/shared/services/localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteTvShowStateService {

  private cachedDataSubject = new BehaviorSubject<Map<number, TvShowDetails>>(new Map<number, TvShowDetails>());
  private readonly cachedData$: Observable<Map<number, TvShowDetails>> = this.cachedDataSubject.asObservable();

  constructor(private localstorage: LocalstorageService) {
    // Use RxJS fromEvent to listen for storage events from other tabs
    fromEvent<StorageEvent>(window, 'storage').subscribe((event) => {
      if (event.key === 'favoriteShows') {
        // do something
        console.log('Storage event received:', event);
      }
    });
  }

  getCachedFavorites(): Observable<TvShowDetails[]> {
    return this.cachedData$.pipe(
      map(data => Array.from(data.values()))
    );
  }

  removeCachedFavorite(id: number): void {
    const updatedCache = new Map(this.cachedDataSubject.value);
    updatedCache.delete(id);
    console.log('removed', updatedCache);
    this.cachedDataSubject.next(updatedCache);
  }

  // Expose snapshot of cached data
  getCachedFavoriteSnapshot(): Map<number, TvShowDetails> {
    return new Map(this.cachedDataSubject.value);
  }

  updateCachedFavorite(id: number, data: TvShowDetails): void {
    const updatedCache = new Map(this.cachedDataSubject.value);
    updatedCache.set(id, data);
    this.cachedDataSubject.next(updatedCache);
  }

  // Public method to toggle a TV show as a favorite
  toggleFavorite(tvShow: TvShow): void {
    const favorites: number[] = this.localstorage.getItem<number[]>('favoriteShows') || [];

    const index = favorites.indexOf(tvShow.id);
    if (index !== -1) {
      favorites.splice(index, 1); // Remove the TV show ID from favorites array
      this.removeCachedFavorite(tvShow.id); // Remove the TV show from the cache
    } else {
      favorites.push(tvShow.id); // Add the TV show ID to favorites array
    }

    localStorage.setItem('favoriteShows', JSON.stringify(favorites));
  }

  // Public method to check if a TV show is marked as a favorite
  isFavorite(tvShowId: number): boolean {
    const favoriteShows: number[] | null = this.localstorage.getItem<number[]>('favoriteShows');
    return !!favoriteShows && favoriteShows.includes(tvShowId);
  }


}

