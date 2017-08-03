import { Component, OnInit } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';

import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {
  constructor(
    private observableService: ObservableService
  ) {}

  ngOnInit() {

    // const mockRespond = new Response(new ResponseOptions({ status: 200, body: 'fake response' }));
    // console.log(mockRespond.toString());

    // this.observableService.getAny()
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   );

    // this.observableService.getObservable()
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   );
  }
}
