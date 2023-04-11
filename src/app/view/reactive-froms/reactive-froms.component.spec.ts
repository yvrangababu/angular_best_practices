import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromsComponent } from './reactive-froms.component';

describe('ReactiveFromsComponent', () => {
  let component: ReactiveFromsComponent;
  let fixture: ComponentFixture<ReactiveFromsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFromsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
