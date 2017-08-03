import { Component, OnInit } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {
  rootModel: any;

  constructor(
    // private observableService: ObservableService
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log('rootModel', this.route.snapshot.parent.data['rootModel']);
    this.rootModel = this.route.snapshot.parent.data['rootModel'];

    this.route.data.subscribe((data) => {
      console.log('subscribe', data.rootModel);
    });
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
