import { TestBed } from '@angular/core/testing';

import { ProductAPIServiceService } from './product-apiservice.service';

describe('ProductAPIServiceService', () => {
  let service: ProductAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
