import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Movie } from '../../movie';
import { Broadcaster } from '../../services/broadcaster.service';
import {EVENTNAMES} from '../../constants/events.constant';

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

  it('should call broadcaster when clicked', () => {
    const broadcasterService = TestBed.get(Broadcaster);
    const spyBroadcaster = spyOn(broadcasterService, 'broadcast');
    expect(component.infoDisplayed).toBeFalsy();
    component.mediaClicked();
    fixture.detectChanges();
    expect(component.infoDisplayed).toBeTruthy();
    expect(spyBroadcaster).toHaveBeenCalled();

  });

  it('when update event is received it should change name', () => {
    const broadcasterService = TestBed.get(Broadcaster);
    broadcasterService.broadcast(EVENTNAMES.mediaUpdated(0), 'new title');
    fixture.detectChanges();
    expect(component.movie.title).toBe('new title');
    expect(fixture.nativeElement.querySelector('h5').textContent).toBe('new title');
  });
});
