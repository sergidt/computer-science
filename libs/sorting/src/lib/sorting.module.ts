import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingComponent } from './sorting.component';
import { SortingRoutingModule } from './sorting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SortingRoutingModule
  ],
  declarations: [SortingComponent],
  exports: [SortingComponent]
})
export class SortingModule {}
