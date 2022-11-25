import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqaComponent } from './faqa.component';

describe('FaqaComponent', () => {
  let component: FaqaComponent;
  let fixture: ComponentFixture<FaqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
