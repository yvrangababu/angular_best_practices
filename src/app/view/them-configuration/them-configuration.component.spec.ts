import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemConfigurationComponent } from './them-configuration.component';

describe('ThemConfigurationComponent', () => {
  let component: ThemConfigurationComponent;
  let fixture: ComponentFixture<ThemConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
