import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NameService } from './name.service';
import { AppRoutes } from './app.route';
import { ObservableService } from './services/observable.service';
import { ObservableResolve } from './app.component.resolve';
import { DocListComponent } from './doc-list/doc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DocListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    NameService,
    ObservableService,
    ObservableResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
