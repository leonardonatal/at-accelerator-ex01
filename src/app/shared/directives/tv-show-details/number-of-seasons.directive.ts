import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Episode } from 'src/app/components/tv-show/models/tv-show-details.model';

@Directive({
  selector: '[appNumberOfSeasons]'
})
export class NumberOfSeasonsDirective {

  constructor() { }

  @Output() numberOfSeasons = new EventEmitter<number>();

  @Input() set appNumberOfSeasons(episodes: Episode[]) {
    const uniqueSeasons: number[] = [];

    episodes.forEach((episode: Episode) => {
      if (!uniqueSeasons.includes(episode.season)) {
        uniqueSeasons.push(episode.season);
      }
    });

    const count = uniqueSeasons.length;
    console.log(count);
    this.numberOfSeasons.emit(count);
  }

}
