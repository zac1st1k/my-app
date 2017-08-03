import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ObservableService {

  constructor(
    private http: Http,
  ) {}

  getPromise () {
    return new Promise((resolve, reject) => {
      resolve({
        title: 'promise',
      });
    });
  }

  getObservable(): Observable<any> {
    console.log('loading...');
    return Observable.of({
      title: 'observable',
      header: 'resovled header',
    }).delay(3000);
  }

  getResponse(): Observable<Response> {
    console.log('loading...');
    return this.http.get('response');
  }

  getAny(): Observable<any> {
    console.log('loading...');
    return this.http.get('any');
  }

  getObservableTimeout(): Observable<any> {
    console.log('loading...');
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
