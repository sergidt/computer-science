import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BackTrackingComponent } from '@computer-science/back-tracking';

const routes: Routes = [
  {
    path: 'backtracking',
   loadChildren: () => import('../../../../libs/back-tracking/src/lib/back-tracking.module').then(m => m.BackTrackingModule)
  },
 {
    path: '',
    redirectTo: 'backtracking',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule { }
