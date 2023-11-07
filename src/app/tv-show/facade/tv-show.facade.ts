import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { TvShowApiService } from "src/app/services/api/tv-show/tv-show.api.service";
import { TvShowStateService } from "src/app/services/state/tv-show/tv-show.state.service";
import { TvShow } from "src/app/tv-show/models/tv-show.model";

@Injectable({
  providedIn: 'root'
})
export class TvShowFacade {

  constructor(private tvShowApiService: TvShowApiService, private tvShowStateService: TvShowStateService){}

  isUpdating$(): Observable<boolean>{
    //returns observable from state, which helps in adding loading spinner in the component.
    return this.tvShowStateService.isUpdating$();
  }

  getTvShows$():Observable<TvShow[]>{
      //returns observable from state, which holds the list of Tv Shows
      return this.tvShowStateService.getTvShow$();
  }

  //call this on page/app load to initialize state with list of Tv Shows
  loadTvShows(search: string = '') {
      this.tvShowStateService.setUpdating(true);
      //make the api call to get the list of Tv Shows
      this.tvShowApiService.getTvShows(search) //Call API(network) to get Tv Shows list
      .pipe(
        map((episoDate) => {
          return episoDate.tv_shows
        })
      )
      .subscribe({
        next: (tvShows) => this.tvShowStateService.setTvShow(tvShows),
        error: (err) => console.log(err),
        complete: () => this.tvShowStateService.setUpdating(false)
      }

      );
  }
}
