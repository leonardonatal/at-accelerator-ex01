import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowStateService {

  private updating$ = new BehaviorSubject<boolean>(false);
  private tvShows$ = new BehaviorSubject<TvShow[]>([]);
  private tvShowDetail$ = new BehaviorSubject<TvShowDetails | undefined>(undefined);

  isUpdating$ (){
    return this.updating$.asObservable();
  }

  setUpdating (isUpdating:boolean){
      this.updating$.next(isUpdating);
  }

  getTvShow$ (){
      return this.tvShows$.asObservable();
  }

  setTvShow (tvShows: TvShow[]){
      this.tvShows$.next(tvShows);
  }

  getTvShowDetail$ (){
    return this.tvShowDetail$.asObservable();
  }

  setTvShowDetail (tvShowDetails: TvShowDetails){
    this.tvShowDetail$.next(tvShowDetails);
  }

}
