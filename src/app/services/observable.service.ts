import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ObservableService {

  constructor(
    private http: Http,
  ) {}

  getHttp(): Observable<any> {
    return this.http.get('123');
  }

  getObservable(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
          observer.next(11);
      }, 1000);
      setTimeout(() => {
          observer.next(22);
      }, 2000);
      setTimeout(() => {
          observer.complete();
      }, 3000);
    });
  }
}
