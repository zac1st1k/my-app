import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterFormValue } from '../model/registerFormValue';
import { NameService } from '../name.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [{
    provide: NameService, useClass: class MockNameService {
      getName() { return 'Mock Name'; }
    }
  }],
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  name: string;

  constructor(
    private formBuilder: FormBuilder,
    private nameService: NameService,
  ) {}

  ngOnInit() {
    this.name = this.nameService.getName();
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });

    this.registerForm.valueChanges.subscribe(value => {
      console.log('registerForm changed!', this.registerForm);
    });

    this.registerForm.controls.firstname.valueChanges.subscribe(value => {
      console.log('firstname changed!', this.registerForm.controls.firstname);
    });
  }

  onSubmit(registerForm: RegisterFormValue) {
    console.log('submit ', registerForm);
  }
}
