import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Views } from './views';

const routes: Routes = [
  {
    path: '',
    component: Views.HomeComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'new',
    component: Views.CreateBlogComponent,
  },
  {
    path: 'onboard',
    component: Views.OnboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
