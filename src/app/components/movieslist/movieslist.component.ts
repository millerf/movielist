import {Component, OnInit, ViewChild} from '@angular/core';
import {DataManagerService} from '../../services/data-manager.service';
import {Movie} from '../../movie';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * MoviesListComponent
 *
 * Display the whole movie list
 * Using a virtual scroll to allow 'smooth' scrolling
 *
 */
@Component({
  selector: 'ml-movieslist',
  templateUrl: './movieslist.component.html'
})
export class MoviesListComponent implements OnInit {

  source$ = new BehaviorSubject<Movie[]>(null);
  viewPortItems: Movie[];

  constructor (public dataManager: DataManagerService) {
  }

  ngOnInit () {

    // We directly add the whole list to the virtual scroll
    this.source$.next(this.dataManager.moviesList);

  }

}
