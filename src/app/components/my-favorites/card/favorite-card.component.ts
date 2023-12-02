import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css']
})
export class FavoriteCardComponent {

  @Input() tvShowDetails!: TvShowDetails;


  @Output() tvBookmarkClicked = new EventEmitter<TvShow>();


  onTvBookmarkClicked(tvShowDetails: TvShowDetails): void {
    this.tvBookmarkClicked.emit(tvShowDetails as TvShow);
  }
}
