import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsIndexComponent } from './snippets-index.component';

describe('SnippetsIndexComponent', () => {
  let component: SnippetsIndexComponent;
  let fixture: ComponentFixture<SnippetsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
