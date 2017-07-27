import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, ResponseOptions, XHRBackend } from '@angular/http';
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

  it('should return value', inject([ObservableService, XHRBackend], (observableService: ObservableService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe(connection =>
      connection.mockRespond(123)
    );

    observableService.getHttp().subscribe(response =>
      expect(response).toBe(123)
    );
  }));

  xit('should Response', inject([ObservableService, XHRBackend], (observableService: ObservableService, mockBackend: MockBackend) => {
    let res;
    res = new Response(new ResponseOptions({ body: 'fake response' }));
    mockBackend.connections.subscribe(connection =>
      connection.mockRespond(res)
    );
    const response = observableService.getHttp();
    expect(response).toBe(res);
  }));
});
