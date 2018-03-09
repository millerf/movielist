import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movieslist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';

describe('MovielistComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListComponent],
      providers: [DataManagerService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
