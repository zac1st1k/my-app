import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ObservableService } from './observable.service';

describe('ObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        ObservableService,
      ]
    });
  });

  it('should be created', inject([ObservableService, XHRBackend], (observableService: ObservableService, mockBackend: MockBackend) => {
    expect(observableService).toBeTruthy();
  }));

  it('should get value', inject([ObservableService, XHRBackend], (observableService: ObservableService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe(connection =>
      connection.mockRespond(123)
    );

    observableService.getAny().subscribe(response =>
      expect(response).toBe(123)
    );
  }));

  it('should get Response', inject([ObservableService, XHRBackend], (observableService: ObservableService, mockBackend: MockBackend) => {
    let mockRespond;
    mockRespond = new Response(new ResponseOptions({ body: 'fake response' }));
    mockBackend.connections.subscribe(connection =>
      connection.mockRespond(mockRespond)
    );

    observableService.getResponse().subscribe(response =>
      expect(response).toEqual(mockRespond)
    );
  }));
});
