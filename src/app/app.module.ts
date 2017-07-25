import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NameService } from './name.service';
import { ObservableService } from './services/observable.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    NameService,
    ObservableService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
