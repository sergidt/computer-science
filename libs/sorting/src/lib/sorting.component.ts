import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'computer-science-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
