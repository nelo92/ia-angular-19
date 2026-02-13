import { Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { Demo2Component } from './components/demo2/demo2.component';

export const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'demo2', component: Demo2Component },
  { path: '', redirectTo: '/demo', pathMatch: 'full' }
];
