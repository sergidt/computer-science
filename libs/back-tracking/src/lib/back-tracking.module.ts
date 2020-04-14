import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackTrackingComponent } from './back-tracking.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownModule } from 'ngx-markdown';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { BacktrackingRoutingModule } from './backtracking-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MarkdownModule,
    BacktrackingRoutingModule,
    MatDividerModule
  ],
  declarations: [BackTrackingComponent, SudokuSolverComponent],
  exports: [BackTrackingComponent]
})
export class BackTrackingModule {}
