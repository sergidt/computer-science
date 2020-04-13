import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SudokuBoard, SUDOKUS, solveSudoku, SudokuDifficulty } from './definitions';

@Component({
  selector: 'computer-science-back-tracking',
  templateUrl: './back-tracking.component.html',
  styleUrls: ['./back-tracking.component.scss']
})
export class BackTrackingComponent {

  sudoku: SudokuBoard = [...SUDOKUS.Difficult];
  SudokuDifficulty = SudokuDifficulty;

  difficulties = [
    SudokuDifficulty.Easy,
    SudokuDifficulty.Difficult,
    SudokuDifficulty.VeryDifficult
  ];

  constructor(private cd: ChangeDetectorRef) { }

  solveSudoku() {
    console.time('solving-sudoku');
    solveSudoku(this.sudoku);
    console.timeEnd('solving-sudoku');
    this.cd.markForCheck();
  }

  changeDifficulty(difficulty: SudokuDifficulty) {
    this.sudoku = [...SUDOKUS[difficulty]];
    this.cd.markForCheck();
  }
}
