import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecuboComponent } from './detallecubo.component';

describe('DetallecuboComponent', () => {
  let component: DetallecuboComponent;
  let fixture: ComponentFixture<DetallecuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallecuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
