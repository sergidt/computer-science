import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const sortingRoutes: Routes = [
 /* {
    path: '',
    component: BackTrackingComponent,
    children: [
      { path: 'sudoku', component: SudokuSolverComponent },
      { path: '', redirectTo: 'sudoku', pathMatch: 'full' },
    ]
  },


  */

];
@NgModule({
  imports: [RouterModule.forChild(sortingRoutes)],
  exports: [RouterModule]})
export class SortingRoutingModule { }
