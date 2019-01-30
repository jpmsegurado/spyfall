import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealPageComponent } from './reveal-page.component';

describe('RevealPageComponent', () => {
  let component: RevealPageComponent;
  let fixture: ComponentFixture<RevealPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevealPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
