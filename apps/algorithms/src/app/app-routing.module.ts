import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'backtracking',
    data: {
      label: 'Backtracking'
    },
    loadChildren: () => import('../../../../libs/back-tracking/src/lib/back-tracking.module').then(m => m.BackTrackingModule)
  },
  {
    path: 'sorting',
    data: {
      label: 'Sorting'
    },
    loadChildren: () => import('../../../../libs/sorting/src/lib/sorting.module').then(m => m.SortingModule)
  },
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule { }
