import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episodate } from 'src/app/components/tv-show/models/episodate.model';
import { TvShowDetailsResponse } from 'src/app/components/tv-show/models/tv-show-details.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowApiService {

  private apiUrl = 'https://www.episodate.com/api/';

  constructor(private http: HttpClient) {}

  getTvShows(query?: string) {
    return this.http.get<Episodate>(`${this.apiUrl}search?q=${query}&page=1`);
  }

  getTvShowDetail(id: number) {
    return this.http.get<TvShowDetailsResponse>(`${this.apiUrl}show-details?q=${id}`);
  }
}
