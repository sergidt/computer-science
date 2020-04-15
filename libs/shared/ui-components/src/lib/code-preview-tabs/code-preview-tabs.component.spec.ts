import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePreviewTabsComponent } from './code-preview-tabs.component';

describe('CodePreviewTabsComponent', () => {
  let component: CodePreviewTabsComponent;
  let fixture: ComponentFixture<CodePreviewTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePreviewTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePreviewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
