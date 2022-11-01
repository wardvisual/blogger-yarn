import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Views } from './views';

const routes: Routes = [
  {
    path: 'home',
    component: Views.HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'new',
    component: Views.BlogComponent.Create,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
