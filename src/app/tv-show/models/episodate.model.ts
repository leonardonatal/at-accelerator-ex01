import { TvShow } from "src/app/tv-show/models/tv-show.model";

export interface Episodate {
  total: number;
  page: number;
  pages: number;
  tv_shows: TvShow[]
}
