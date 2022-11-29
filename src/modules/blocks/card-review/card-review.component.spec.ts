import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlockCardReviewComponent} from './card-review.component';

describe('CardComponent', () => {
  let component: BlockCardReviewComponent;
  let fixture: ComponentFixture<BlockCardReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCardReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
