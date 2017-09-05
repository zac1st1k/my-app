import { Component, OnInit } from '@angular/core';
import * as R from 'ramda';

interface Foo {
  bar: number;
  bar2: {
    bar3: string
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    let foo: Array<Foo>;
    foo = [{
      bar: 123,
      bar2: {
        bar3: 'abc'
      }
    }, {
      bar: 456,
      bar2: {
        bar3: 'cba'
      }
    }];
    // const fooMapped = R.pipe(
    //   R.map((a: { bar: number, bar2: number}) => ({ bar2: a.bar2 })),
    //   R.pluck('bar2')
    //   // R.map((a: { bar2: number}) => ( a.bar2 ))
    // )(foo);
    const fooMapped = R.pluck('bar2')(foo) as Array<{
      bar3: string
    }>;
    console.log(fooMapped[0].bar3);
  }
}
