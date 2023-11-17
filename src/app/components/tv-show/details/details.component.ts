import { Component, Input, OnInit } from '@angular/core';
import { Episode, TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  count!: number;

  @Input() tvShowDetails!: TvShowDetails;

  ngOnInit(): void {
    console.log(this.tvShowDetails);
  }

  handleNumberOfSeasons(count: number) {
    console.log(count);
    this.count = count;
  }


}
