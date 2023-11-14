import { Component, Input } from '@angular/core';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() tvShowDetails: TvShowDetails | null = null;

}
