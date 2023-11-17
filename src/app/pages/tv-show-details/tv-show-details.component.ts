import { Component, Input } from '@angular/core';
import {  TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent {

  @Input()
  tvShowDetails!: TvShowDetails;

  constructor() {}

}
