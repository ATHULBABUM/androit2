import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';


const routes: Routes = [{path:"",component:MaterialComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
