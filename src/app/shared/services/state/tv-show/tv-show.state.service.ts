import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TvShow } from 'src/app/tv-show/models/tv-show.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowStateService {

  private updating$ = new BehaviorSubject<boolean>(false);
  private tvShows$ = new BehaviorSubject<TvShow[]>([]);

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

}
