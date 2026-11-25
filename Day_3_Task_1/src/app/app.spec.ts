import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render ElectroShop store info, products, and summary', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('ElectroShop');
    expect(text).toContain('Your favorite electronics store');
    expect(text).toContain('Amman, Jordan');
    expect(text).toContain('12');
    expect(text).toContain('USD');
    expect(text).toContain('We Are Open');

    expect(app.finalPrice).toBe(675);
    expect(text).toContain('$750');
    expect(text).toContain('$675');
    expect(text).toContain('10% Discount');

    expect(text).toContain('Smartphone');
    expect(text).toContain('$450');
    expect(text).toContain('Headphones');
    expect(text).toContain('$80');
    expect(text).toContain('Smart Watch');
    expect(text).toContain('$120');
    expect(text).toContain('Keyboard');
    expect(text).toContain('$45');

    expect(app.totalProductsCount).toBe(5);
    expect(app.highestPrice).toBe(750);
    expect(app.lowestPrice).toBe(45);
    expect(app.totalProductsValue).toBe(1445);
    expect(text).toContain('$1445');
  });
});
