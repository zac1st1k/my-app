import { Component, OnInit } from '@angular/core';
import { ObservableService } from './services/observable.service';

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
