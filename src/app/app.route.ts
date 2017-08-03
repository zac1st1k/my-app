import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DocListComponent } from './doc-list/doc-list.component';

import { ObservableResolve } from './app.component.resolve';

export const AppRoutes: Routes = [
  {
    path: '',
    component: DocListComponent,
    resolve: ObservableResolve,
  },
  {
    path: 'form',
    component: ReactiveFormComponent,
  },
];
