import { TestBed, inject } from '@angular/core/testing';

import { UppdateProductsService } from './uppdate-products.service';

describe('UppdateProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UppdateProductsService]
    });
  });

  it('should be created', inject([UppdateProductsService], (service: UppdateProductsService) => {
    expect(service).toBeTruthy();
  }));
});
