import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrutosSecos } from './frutos-secos';

describe('FrutosSecos', () => {
  let component: FrutosSecos;
  let fixture: ComponentFixture<FrutosSecos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrutosSecos],
    }).compileComponents();

    fixture = TestBed.createComponent(FrutosSecos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
