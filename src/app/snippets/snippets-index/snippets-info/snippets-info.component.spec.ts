import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsInfoComponent } from './snippets-info.component';

describe('SnippetsInfoComponent', () => {
  let component: SnippetsInfoComponent;
  let fixture: ComponentFixture<SnippetsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
