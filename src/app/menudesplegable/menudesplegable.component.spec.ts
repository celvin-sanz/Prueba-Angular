import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudesplegableComponent } from './menudesplegable.component';

describe('MenudesplegableComponent', () => {
  let component: MenudesplegableComponent;
  let fixture: ComponentFixture<MenudesplegableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudesplegableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
