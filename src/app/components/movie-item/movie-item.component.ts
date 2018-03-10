import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { environment } from '../../../environments/environment';
import { Broadcaster } from '../../services/broadcaster.service';
import { Subscription } from 'rxjs/Subscription';
import { EVENTNAMES } from '../../constants/events.constant';

/**
 * MovieItemComponent
 *
 * Display the Movie in the main list.
 * No need to add lazy-loading on the thumbnails as the elements are dynamically added as user is scrolling
 *
 */
@Component({
  selector: 'ml-movie-item',
  templateUrl: './movie-item.component.html'
})
export class MovieItemComponent implements OnInit, OnDestroy {

  @Input('movie') movie: Movie;

  infoDisplayed = false; // If the infos of this media are displayed
  mediaClickedSubscription: Subscription;
  mediaChangedSubscription: Subscription;

  constructor(private broadcaster: Broadcaster) {
  }

  ngOnInit() {
    this.mediaClickedSubscription = this.broadcaster.on( EVENTNAMES.mediaClicked)
      .subscribe(() => {
        this.infoDisplayed = false;
      });
    this.mediaChangedSubscription = this.broadcaster.on(EVENTNAMES.mediaUpdated(this.movie.id))
      .subscribe((newtitle: string) => {
        this.movie.title = newtitle;
      });
  }

  ngOnDestroy() {
    this.mediaClickedSubscription.unsubscribe();
    this.mediaChangedSubscription.unsubscribe();
  }

  public mediaClicked() {
    // We send a copy of the object
    this.broadcaster.broadcast('mediaClicked', this.movie.clone());
    this.infoDisplayed = true;

  }
}
