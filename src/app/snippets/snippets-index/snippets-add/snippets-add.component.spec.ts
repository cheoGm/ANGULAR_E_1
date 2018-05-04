import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsAddComponent } from './snippets-add.component';

describe('SnippetsAddComponent', () => {
  let component: SnippetsAddComponent;
  let fixture: ComponentFixture<SnippetsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
