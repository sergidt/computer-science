import { Component, OnInit } from '@angular/core';
import { SudokuBoard, SUDOKUS, solveSudoku } from './definitions';

@Component({
  selector: 'computer-science-back-tracking',
  templateUrl: './back-tracking.component.html',
  styleUrls: ['./back-tracking.component.scss']
})
export class BackTrackingComponent implements OnInit {

  sudoku: SudokuBoard = [...SUDOKUS.Easy];

  constructor() { }

  ngOnInit(): void {
    console.clear();
     console.log(solveSudoku(this.sudoku));
   // const sudoku2 = this.sudoku;
   // sudoku2[0][1] = 30;

   // console.log(this.sudoku);
  }
}
