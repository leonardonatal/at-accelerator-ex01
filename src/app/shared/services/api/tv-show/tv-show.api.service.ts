import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from 'src/app/shared/models/episodate.model';
import { TvShowDetailsResponse } from 'src/app/components/tv-show/models/tv-show-details.model';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';

const NO_DATA: SearchResponse<TvShow[]> = {page: 1, pages: 0, total: 0, tv_shows: []};
@Injectable({
  providedIn: 'root'
})
export class TvShowApiService {

  private apiUrl = 'https://www.episodate.com/api/';

  constructor(private http: HttpClient) {}

  getTvShows(query?: string, page = 1) {
    const endpoint = query ? `search?q=${query}&page=${page}` : `most-popular?page=${page}`;
    return this.http.get<SearchResponse<TvShow>>(`${this.apiUrl}${endpoint}`);
  }

  getTvShowDetail(id: number) {
    console.log('CALLING API');
    return this.http.get<TvShowDetailsResponse>(`${this.apiUrl}show-details?q=${id}`);
  }
}
