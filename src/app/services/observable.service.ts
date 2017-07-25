import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ObservableService {

  constructor(
    private http: Http,
  ) {}

  getHttp(): Observable<Response> {
    return this.http.request('');
  }
}
