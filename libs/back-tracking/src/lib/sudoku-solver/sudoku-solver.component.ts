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

  markdown = `## Pseudo code
\`\`\`
  Find row, col of an unassigned cell
  If there is none, return true
  For digits from 1 to 9
    a) If there is no conflict for digit at row, col
        assign digit to row, col and recursively try fill in rest of grid
    b) If recursion successful, return true
    c) Else, remove digit and try another
  If all digits have been tried and nothing worked, return false
\`\`\`

## Code

\`\`\`typescript
export type SudokuBoard  = Array<Array<number>>;
export type Location = [number, number];
export type SudokuMap = {
  [key: string]: SudokuBoard;
}

export enum SudokuDifficulty {
Easy= 'Easy',
  Difficult = 'Difficult',
  VeryDifficult = 'Very difficult'
}

const UNASSIGNED = 0;

export const SUDOKUS: SudokuMap = {
  [SudokuDifficulty.VeryDifficult]: [
    [3, 0, 0, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 0, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 0, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 0],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
  ],
  [SudokuDifficulty.Difficult]: [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
  ],
  [SudokuDifficulty.Easy]: [
    [0, 1, 6, 5, 7, 8, 4, 9, 2],
    [5, 2, 9, 1, 3, 4, 7, 6, 8],
    [4, 8, 7, 6, 2, 9, 5, 3, 1],
    [2, 6, 3, 4, 1, 5, 9, 8, 7],
    [9, 7, 4, 8, 6, 3, 1, 0, 5],
    [8, 5, 1, 7, 9, 2, 6, 4, 3],
    [1, 3, 8, 9, 4, 7, 2, 5, 6],
    [6, 9, 0, 3, 5, 1, 8, 7, 4],
    [7, 4, 5, 2, 8, 6, 3, 1, 0],
  ]
};

// Functions
export const range = (start: number, end: number): Array<number> =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

function findEmptyLocation(board: SudokuBoard): Location {
  for (const row of range(0, 8))
    for (const col of range(0, 8))
      if (board[row][col] === UNASSIGNED) {
        return [row, col];
      }
  return null;
}

const usedInRow = (board: SudokuBoard, row: number, value: number) => board[row].includes(value);


function usedInCol(board: SudokuBoard, col: number, value: number): boolean {
  for (const i of range(0, 8))
    if(board[i][col] === value)
      return true;

  return false;
}

function usedInBox(board: SudokuBoard, row: number, col: number, value: number): boolean {
  for (const i of range(0, 2))
    for (const j of range(0, 2))
      if (board[i + (row - row % 3)][j + (col - col % 3)] === value)
        return true;

  return false;
}

const checkIsSafeLocation = (board: SudokuBoard, row: number, col: number, value: number) =>
  !usedInRow(board, row, value) && !usedInCol(board, col, value) && !usedInBox(board, row, col, value);


export function solveSudoku(board: SudokuBoard): boolean {
  const emptyLocation = findEmptyLocation(board);

  if (!emptyLocation)
    return true; // sudoku is solved!!

  const [row, column] = emptyLocation;

  for (const value of range(1, 9)) {
    // if looks promising (empty position)
    if (checkIsSafeLocation(board, row, column, value)) {
      board[row][column] = value;

      if (solveSudoku(board)) // if is solved returns!!!
        return true;

      // not solved, reset location and try again
      board[row][column] = UNASSIGNED;
    }
  }
  return false;
}
\`\`\`
`;



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
