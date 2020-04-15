import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePreviewTabsComponent } from './code-preview-tabs/code-preview-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule,
            MatTabsModule],
  exports: [
    CodePreviewTabsComponent
  ],
  declarations: [CodePreviewTabsComponent]
})
export class SharedUiComponentsModule {}
