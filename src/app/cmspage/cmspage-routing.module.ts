import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from  './contact-form/contact-form.component'
import { PageComponent } from './page/page.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path:'page/:slug', component:PageComponent },
  { path: 'contact', component:ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
