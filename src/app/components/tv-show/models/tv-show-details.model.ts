import { TvShow } from "src/app/components/tv-show/models/tv-show.model";

export interface TvShowDetailsResponse {
  tvShow: TvShowDetails;
}

export interface TvShowDetails extends TvShow {
  countdown?: Countdown;
  description: string;
  description_source: string;
  end_date: string;
  episodes: Episode[];
  genres: string[];
  image_path: string;
  pictures: string[];
  rating: number;
  rating_count: string;
  runtime: number;
  url: string;
  youtube_link: string;
}

export interface Episode {
  air_date: string;
  episode: number;
  name: string;
  season: number;
}

export interface Countdown {
  air_date: string;
}
