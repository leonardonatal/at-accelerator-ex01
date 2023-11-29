import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";
import { TvShowApiService } from "src/app/shared/services/api/tv-show/tv-show.api.service";
import { TvShowStateService } from "src/app/shared/services/state/tv-show/tv-show.state.service";
import { TvShowDetails } from "src/app/components/tv-show/models/tv-show-details.model";
import { TvShow } from "src/app/components/tv-show/models/tv-show.model";
import { SearchResponse } from "src/app/shared/models/episodate.model";

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
  loadTvShows(search: string = '', page: number = 1): Observable<SearchResponse<TvShow>> {
    console.log('Before setting updating to true');
      this.tvShowStateService.setUpdating(true);
      //make the api call to get the list of Tv Shows
      return this.tvShowApiService.getTvShows(search, page).pipe(
        map((response: SearchResponse<TvShow>) => {
          console.log('Inside tap - TV Shows fetched:', response);
          this.tvShowStateService.setTvShow(response.tv_shows);
          this.tvShowStateService.setUpdating(false);
          console.log('After setting updating to false');
          return response; // Return the modified data
        }),
        catchError((error) => {
          console.log('error', error); // Log the error or handle it as needed
          this.tvShowStateService.setUpdating(false); // Ensure to set updating to false on error
          return of({ total: 0, page: 0, pages: 0, tv_shows: [] } as SearchResponse<TvShow>); // Return a default SearchResponse or handle the error data
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
