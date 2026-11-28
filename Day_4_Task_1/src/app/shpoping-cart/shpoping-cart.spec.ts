import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShpopingCart } from './shpoping-cart';

describe('ShpopingCart', () => {
  let component: ShpopingCart;
  let fixture: ComponentFixture<ShpopingCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShpopingCart],
    }).compileComponents();

    fixture = TestBed.createComponent(ShpopingCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
