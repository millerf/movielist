import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Movie } from '../../movie';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemComponent, TruncatePipe],
      providers: [TruncatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.movie = new Movie();
    component.movie.title = 'test';
    component.movie.description = 'test ytest';
    try {
      fixture.detectChanges();
    } catch (e) {
      console.error(e);
    }
  });


  it('should create', () => {
    console.error(component);
    expect(component).toBeTruthy();
  });
});
