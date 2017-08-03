import { Component, OnInit } from '@angular/core';
import { ObservableService } from './services/observable.service';
import { Response, ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private observableService: ObservableService
  ) {}

  ngOnInit() {

    const mockRespond = new Response(new ResponseOptions({ status: 200, body: 'fake response' }));
    // console.log(mockRespond.toString());

    this.observableService.getAny()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );

    this.observableService.getObservable()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
