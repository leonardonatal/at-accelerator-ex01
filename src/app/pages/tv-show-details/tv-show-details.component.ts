import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowFacade } from 'src/app/shared/services/facade/tv-show/tv-show.facade';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent {

  // private userId!: number;
  @Input()
  tvShowDetails!: TvShowDetails;

  constructor(private tvShowFacade: TvShowFacade, private route: ActivatedRoute) {}


}
