import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ObservableService } from './services/observable.service';

@Injectable()
export class ObservableResolve implements Resolve<any> {

  constructor(private observableService: ObservableService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.observableService.getObservable();
  }
}
