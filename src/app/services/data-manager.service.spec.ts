import { TestBed, inject } from '@angular/core/testing';

import { DataManagerService } from './data-manager.service';
import { Movie } from '../movie';

describe('DataManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataManagerService]
    });
  });

  it('should be created', inject([DataManagerService], (service: DataManagerService) => {
    expect(service).toBeTruthy();
  }));

  it('to have a full list after creation', inject([DataManagerService], (service: DataManagerService) => {
    expect(service.moviesList.length).toBeGreaterThan(0);
  }));

  it('to have list of movies', inject([DataManagerService], (service: DataManagerService) => {
    expect(service.moviesList[0].constructor.name).toBe(new Movie().constructor.name);
  }));
});
