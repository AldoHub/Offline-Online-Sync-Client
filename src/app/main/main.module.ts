import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

//need to import ReactiveForms module here too
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MainRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
