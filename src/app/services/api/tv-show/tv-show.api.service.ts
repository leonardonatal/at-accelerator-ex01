import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episodate } from 'src/app/tv-show/models/episodate.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowApiService {

  private apiUrl = 'https://www.episodate.com/api/search';

  constructor(private http: HttpClient) {}

  getTvShows(query?: string) {
    return this.http.get<Episodate>(`${this.apiUrl}?q=${query}&page=1`);
  }
}
