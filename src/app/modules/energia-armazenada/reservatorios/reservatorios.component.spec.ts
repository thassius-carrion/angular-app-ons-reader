import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservatoriosComponent } from './reservatorios.component';

describe('ReservatoriosComponent', () => {
  let component: ReservatoriosComponent;
  let fixture: ComponentFixture<ReservatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservatoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
