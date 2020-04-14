import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { BackTrackingComponent } from './back-tracking.component';

export const backtrackingRoutes: Routes = [
  {
    path: '',
    component: BackTrackingComponent,
    children: [
      { path: 'sudoku', component: SudokuSolverComponent },
      { path: '', redirectTo: 'sudoku', pathMatch: 'full' },
    ]
  },


];
@NgModule({
  imports: [RouterModule.forChild(backtrackingRoutes)],
  exports: [RouterModule]})
export class BacktrackingRoutingModule { }
