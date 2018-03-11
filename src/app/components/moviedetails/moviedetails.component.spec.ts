import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './moviedetails.component';
import { Movie } from '../../movie';
import { EVENTNAMES } from '../../constants/events.constant';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Broadcaster } from '../../services/broadcaster.service';


describe('MoviedetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent],
      providers: [Broadcaster],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call broadcaster when text changed', () => {
    const broadcasterService = TestBed.get(Broadcaster);
    const spyBroadcaster = spyOn(broadcasterService, 'broadcast');
    component.movie = new Movie();
    component.movie.title = 'test title';
    component.movie.id = 12345;
    fixture.detectChanges();
    const inputElement = component.inputName.nativeElement;
    inputElement.value = 'test title changed';
    inputElement.dispatchEvent(new Event('keyup'));
    expect(component.movie.title).toBe('test title changed');
    expect(spyBroadcaster).toHaveBeenCalledWith(EVENTNAMES.mediaUpdated(12345), 'test title changed');

  });

});
