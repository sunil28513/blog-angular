import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent }  from './pagenotfound/pagenotfound.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path :'', redirectTo:'', pathMatch:'full'},
  {path :'**', component:PagenotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
