import { TvShow } from "src/app/components/tv-show/models/tv-show.model";

export interface SearchResponse<T> {
  total: number;
  page: number;
  pages: number;
  tv_shows: T[]
}
