import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PersoonDetailsComponent } from './persoon-details/persoon-details.component';
import { PersonenComponent } from './personen/personen.component';
import { KlantenComponent } from './klanten/klanten.component';

const routes: Routes = [
    {path: 'personen', component: PersonenComponent},
    {path: 'klanten', component: KlantenComponent},
    {path: 'detail/:id', component: PersoonDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
