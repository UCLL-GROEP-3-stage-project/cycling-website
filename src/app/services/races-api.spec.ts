import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RacesApi } from './races-api';

describe('RacesApi', () => {
  let service: RacesApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacesApi, provideHttpClient(), provideHttpClientTesting()]
    });

    service = TestBed.inject(RacesApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should call posts endpoint', () => {
    service.getRaces().subscribe((races) => {
      expect(races.length).toBe(1);
      expect(races[0].title).toBe('Tour de France');
    });

    const request = httpTestingController.expectOne(
      '/api/races.json'
    );
    expect(request.request.method).toBe('GET');
    request.flush([{ id: 1, title: 'Tour de France' }]);
  });
});
