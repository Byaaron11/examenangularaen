import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecubosComponent } from './homecubos.component';

describe('HomecubosComponent', () => {
  let component: HomecubosComponent;
  let fixture: ComponentFixture<HomecubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecubosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
