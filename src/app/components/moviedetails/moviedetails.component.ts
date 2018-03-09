import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EVENTNAMES } from '../../constants/events.constant';
import { Broadcaster } from '../../services/broadcaster.service';
import { Subscription } from 'rxjs/Subscription';
import { Movie } from '../../movie';

@Component({
  selector: 'ml-moviedetails',
  templateUrl: './moviedetails.component.html'
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movie: Movie;
  mediaClickedSubscription: Subscription;

  @ViewChild('input') inputName: ElementRef;

  constructor(protected broadcaster: Broadcaster) {
  }

  ngOnInit() {
    this.mediaClickedSubscription = this.broadcaster.on(EVENTNAMES.mediaClicked)
      .subscribe((_movie: Movie) => {
        this.movie = _movie;
      });
  }

  ngOnDestroy() {
    // Unused in this app, but cleaner
    this.mediaClickedSubscription.unsubscribe();
  }

  public changeName(name) {
    this.broadcaster.broadcast(EVENTNAMES.mediaUpdated(this.movie.id), this.inputName.nativeElement.value);
  }
}
