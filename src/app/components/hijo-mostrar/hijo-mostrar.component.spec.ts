import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMostrarComponent } from './hijo-mostrar.component';

describe('HijoMostrarComponent', () => {
  let component: HijoMostrarComponent;
  let fixture: ComponentFixture<HijoMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoMostrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HijoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
