import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSearchboxComponent } from './tv-searchbox.component';

describe('TvSearchboxComponent', () => {
  let component: TvSearchboxComponent;
  let fixture: ComponentFixture<TvSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
