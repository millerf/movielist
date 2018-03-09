import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { environment } from '../../../environments/environment';

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
export class MovieItemComponent implements OnInit {

  @Input('movie') movie: Movie;

  constructor() {
  }

  ngOnInit() {
  }

  public getThumbnailUrl() {

    // The thumbnail prefix is being retrieved from the environment and added to the thumbnail path.

    return environment.thumbnailPrefix + this.movie.thumbnailUrl;
  }
}
