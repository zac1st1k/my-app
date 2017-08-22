import { Component, OnInit, Input } from '@angular/core';

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

const user = new Student('Jane', 'M.', 'User');

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  rootModel: any;

  constructor(
  ) {}

  ngOnInit() {
    console.log(greeter(user)); // interface compatible
    let num: number;
    num = undefined; // undefined
    const fibonacci: [] = [1, '1', 2, 3, 5];
    console.log('rootModel', this.rootModel);
    console.logj('fibonacci', fibonacci.push(true));
    function buildName(firstName?: string, lastName: string) {
        return firstName + ' ' + lastName;
    }
    const xcat = buildName(23, 43);
    console.log('xcat', xcat(true));
  }

  test () {
    const bar: {
        foo: number | null
    } = {};

    badsdfr.bar.foo.length.length = 3;
    console.log(bar.bar.foo.length);
  }
}
