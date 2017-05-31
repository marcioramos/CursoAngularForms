import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormComponent } from "app/template-form/template-form.component";
import { DataFromComponent } from "app/data-from/data-from.component";


const routes: Routes = [
  { path: 'templateFrom', component: TemplateFormComponent },
  { path: 'dataFrom', component: DataFromComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dataFrom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
