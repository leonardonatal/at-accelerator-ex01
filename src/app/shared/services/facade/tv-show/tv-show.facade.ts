import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";
import { TvShowApiService } from "src/app/shared/services/api/tv-show/tv-show.api.service";
import { TvShowStateService } from "src/app/shared/services/state/tv-show/tv-show.state.service";
import { TvShowDetails } from "src/app/components/tv-show/models/tv-show-details.model";
import { TvShow } from "src/app/components/tv-show/models/tv-show.model";

@Injectable({
  providedIn: 'root'
})
export class TvShowFacade {

  constructor(private tvShowApiService: TvShowApiService, private tvShowStateService: TvShowStateService){}

  isUpdating$(): Observable<boolean> {
    //returns observable from state, which helps in adding loading spinner in the component.
    return this.tvShowStateService.isUpdating$();
  }

  getTvShows$():Observable<TvShow[]> {
      //returns observable from state, which holds the list of Tv Shows
      return this.tvShowStateService.getTvShow$();
  }

  //call this on page/app load to initialize state with list of Tv Shows
  loadTvShows(search: string = ''):Observable<TvShow[]> {
    console.log('Before setting updating to true');
      this.tvShowStateService.setUpdating(true);
      //make the api call to get the list of Tv Shows
      return this.tvShowApiService.getTvShows(search)
      .pipe(
        map((episoDate) => episoDate.tv_shows),
        tap((tvShows) => {
          console.log('Inside tap - TV Shows fetched:', tvShows);
          this.tvShowStateService.setTvShow(tvShows);
          this.tvShowStateService.setUpdating(false);
          console.log('After setting updating to false');
        }),
        catchError((error) => {
          console.log( 'errooo', error); // Log the error or handle it as needed
          return of([]); // Return an empty array or handle the error data
        })
      );
  }

  loadTvShowDetails(id: number): Observable<TvShowDetails> {
    return this.tvShowApiService.getTvShowDetail(id)
    .pipe(
      map((tvShowDetail) => {
        this.tvShowStateService.setTvShowDetail(tvShowDetail.tvShow);
        return tvShowDetail.tvShow
      })
    )
  }

  getTvShowDetails$(): Observable<TvShowDetails | undefined> {
    return this.tvShowStateService.getTvShowDetail$();
  }
}
