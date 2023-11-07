import { Component, Input } from '@angular/core';
import { TvShow } from 'src/app/tv-show/models/tv-show.model';

@Component({
  selector: 'app-tv-show-table',
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})

//it is a dumb component, it is purely a presentational component,
//it is concerned with how we get Hero data and how we manage edit/delete events
export class TvShowTableComponent {

  //input - expects the data from parent.
  @Input() tvShows!: TvShow[];
  @Input() titles!: string[];

}
