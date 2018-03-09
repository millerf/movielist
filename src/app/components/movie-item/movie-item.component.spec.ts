import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Movie } from '../../movie';
import { Broadcaster } from '../../services/broadcaster.service';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemComponent, TruncatePipe],
      providers: [Broadcaster],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.movie = new Movie();
    component.movie.id = 0;
    component.movie.title = 'test';
    component.movie.description = 'test ytest';
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
