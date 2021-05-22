import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTickerComponent } from './vote-ticker.component';

describe('VoteTickerComponent', () => {
  let component: VoteTickerComponent;
  let fixture: ComponentFixture<VoteTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteTickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
