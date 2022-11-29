import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageMainComponent} from '../main/main.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
