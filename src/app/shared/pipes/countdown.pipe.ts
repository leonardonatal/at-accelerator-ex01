import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(value: TvShowDetails): string {
    if (value.countdown?.air_date) {
      return "Next episode " + formatDistance(new Date(value.countdown.air_date), new Date(), { addSuffix: true });
    } else if (value.status === "Ended" || value.status === "Canceled/Ended") {
      return "This show has ended";
    } else {
      return value.status +  "but no next episode date";
    }
  }

}
