import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TvShowFacade } from 'src/app/shared/services/facade/tv-show/tv-show.facade';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit{

  private userId!: number;

  tvShowDetails$!: Observable<TvShowDetails>;

  constructor(private tvShowFacade: TvShowFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // Extract the 'id' parameter from the route
      const idString = params.get('id');
      this.userId = idString ? parseInt(idString, 10) : 0;
      this.tvShowDetails$  = this.tvShowFacade.loadTvShowDetails(this.userId);
    });
  }

}
