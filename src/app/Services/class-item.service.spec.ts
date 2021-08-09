import { TestBed } from '@angular/core/testing';

import { ClassItemService } from './class-item.service';

describe('ClassItemService', () => {
  let service: ClassItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
