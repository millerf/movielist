import { Injectable } from '@angular/core';
import { Movie } from '../movie';

declare var require;

@Injectable()
export class DataManagerService {

  moviesList: Movie[] = [];

  constructor() {

    const moviesJSON = require('assets/movies.json');
    try {
      for (const m of moviesJSON) {
        const movie = new Movie();
        movie.title = m.title;
        movie.description = m.overview;
        movie.id = m.id;
        movie.voteCount = m.vote_count;
        movie.voteAvg = m.vote_average;
        this.moviesList.push(movie);
      }
    } catch (e) {
      console.error('An error hapened while retrieving the movie list', e);
    }
  }
}
