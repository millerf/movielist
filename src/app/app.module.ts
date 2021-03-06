import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VirtualListModule } from 'angular-virtual-list';


import { AppComponent } from './components/app/app.component';
import { MoviesListComponent } from './components/movieslist/movieslist.component';
import { MovieDetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { DataManagerService } from './services/data-manager.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { Broadcaster } from './services/broadcaster.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VirtualListModule,
  ],
  providers: [
    DataManagerService,
    Broadcaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
