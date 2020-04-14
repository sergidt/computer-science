import { Component, ChangeDetectorRef } from '@angular/core';
import { SUDOKUS, SudokuBoard, SudokuDifficulty, solveSudoku } from './definitions';

@Component({
  selector: 'compurter-science-sudoku-solve',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.scss']
})
export class SudokuSolverComponent {
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
