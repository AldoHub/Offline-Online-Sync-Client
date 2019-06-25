import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: 'main', loadChildren: './main/main.module#MainModule' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
