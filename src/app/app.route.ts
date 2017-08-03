import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { HeaderComponent } from './header/header.component';

import { ObservableResolve } from './app.component.resolve';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    resolve: {
      rootModel: ObservableResolve
    },
    children: [
      { path: '', redirectTo: 'doc', pathMatch: 'full' },
      { path: 'doc', component: DocListComponent },
      { path: 'form', component: ReactiveFormComponent },
    ]
  },
  // {
  //   path: 'doc',
  //   component: DocListComponent,
  // },
  // {
  //   path: 'form',
  //   component: ReactiveFormComponent,
  // },
];
