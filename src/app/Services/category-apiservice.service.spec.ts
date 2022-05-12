import { TestBed } from '@angular/core/testing';

import { CategoryAPIServiceService } from './category-apiservice.service';

describe('CategoryAPIServiceService', () => {
  let service: CategoryAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
