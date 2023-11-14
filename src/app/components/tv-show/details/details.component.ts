import { Component, Input, OnInit } from '@angular/core';
import { TvShowDetails } from 'src/app/components/tv-show/models/tv-show-details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() tvShowDetails!: TvShowDetails;

  ngOnInit(): void {
    console.log(this.tvShowDetails);
  }

}
