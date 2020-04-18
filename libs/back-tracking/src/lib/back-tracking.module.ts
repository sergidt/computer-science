import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackTrackingComponent } from './back-tracking.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownModule } from 'ngx-markdown';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { BacktrackingRoutingModule } from './backtracking-routing.module';
import { SharedUiComponentsModule } from '@computer-science/shared/ui-components';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MarkdownModule,
    MatCardModule,
    BacktrackingRoutingModule,
    MatDividerModule,
    SharedUiComponentsModule
  ],
  declarations: [BackTrackingComponent, SudokuSolverComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [BackTrackingComponent]
})
export class BackTrackingModule {}
