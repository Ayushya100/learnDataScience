import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coreRoutes } from './modules/core/core.routes';
import { tmRoutes } from './modules/templates/template-routing.module';

const routes: Routes = [
  ...tmRoutes,
  ...coreRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
