import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteTvShowStateService {

  private favoriteShowsSubject = new BehaviorSubject<{ [id: number]: boolean }>({});
  favoriteShows$: Observable<{ [id: number]: boolean }> = this.favoriteShowsSubject.asObservable();

  constructor() {
    // Initialize the favorite list from localStorage
    this.initFavoriteList();

    // Use RxJS fromEvent to listen for storage events from other tabs
    fromEvent<StorageEvent>(window, 'storage').subscribe((event) => {
      if (event.key === 'favoriteShows') {
        this.initFavoriteList();
      }
    });
  }

  // Public method to toggle a TV show as a favorite
  toggleFavorite(tvShowId: number): void {
    const favorites = { ...this.favoriteShowsSubject.value };
    favorites[tvShowId] = !favorites[tvShowId];
    this.favoriteShowsSubject.next(favorites);

    // Update localStorage to sync with other tabs
    localStorage.setItem('favoriteShows', JSON.stringify(favorites));
  }

  // Public method to check if a TV show is marked as a favorite
  isFavorite(tvShowId: number): boolean {
    return !!this.favoriteShowsSubject.value[tvShowId];
  }

  // Initialize the favorite list from localStorage
  private initFavoriteList() {
    const storedFavorites = localStorage.getItem('favoriteShows');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      this.favoriteShowsSubject.next(favorites);
    }
  }

}

