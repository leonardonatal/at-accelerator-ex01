export interface TvShow {
  id: number;
  name: string;
  country: string;
  image_thumbnail_path: string;
  network: string;
  permalink: string;
  status: Status;
  start_date: string;
  end_date: string;
}

export type Status = "Canceled/Ended" | "Ended" | "Running" | "New Series" | "To Be Determined";
