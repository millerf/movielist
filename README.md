# MovieList

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1ffb09d8748341fda9e48b2c525d5589)](https://www.codacy.com/app/fab/movielist?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=millerf/movielist&amp;utm_campaign=Badge_Grade)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.
It was used as a competency test.

## Rules
The assets/movies.json JSON file, contains around 700 movies. Using this file, build a list of movies. 
Each item should display: 
1. title
2. poster image
3. truncated description 
4. vote_average
5. vote_count
 
Note: To display the poster append the poster_path to "http://image.tmdb.org/t/p/w92/". For example if the entry has poster_path "\/imps263dHNe3SuoaAJORZyNTdDT.jpg" then the poster image should be http://image.tmdb.org/t/p/w92/imps263dHNe3SuoaAJORZyNTdDT.jpg
 
When clicking on a movie it should be highlighted, and its information should be loaded on the right side of the page: name, full description etc. Here the movie name should be as input field. Changing the input value, should update the movie name in the list.
 
Things to note: 
1. The list should scroll smoothly.
2. When the movie is loaded on click on the right side of the page, a new object reference should be used.

## Installation
Clone the project and do `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

