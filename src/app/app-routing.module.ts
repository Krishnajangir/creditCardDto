import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardDetailsComponent } from './add-card-details/add-card-details.component';
import { AppComponent } from './app.component';
import { ShowCardDetailsComponent } from './show-card-details/show-card-details.component';

const routes: Routes = [{
  path: '', component: AddCardDetailsComponent
}, {
  path: 'cardDetails', component: ShowCardDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
