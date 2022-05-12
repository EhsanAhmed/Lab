import { TestBed } from '@angular/core/testing';

import { CardItemDataService } from './card-item-data.service';

describe('CardItemDataService', () => {
  let service: CardItemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardItemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
