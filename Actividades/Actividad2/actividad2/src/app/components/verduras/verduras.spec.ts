import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Verduras } from './verduras';

describe('Verduras', () => {
  let component: Verduras;
  let fixture: ComponentFixture<Verduras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verduras],
    }).compileComponents();

    fixture = TestBed.createComponent(Verduras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
