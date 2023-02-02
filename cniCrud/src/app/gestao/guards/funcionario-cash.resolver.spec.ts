import { TestBed } from '@angular/core/testing';

import { FuncionarioCashResolver } from './funcionario-cash.resolver';

describe('FuncionarioCashResolver', () => {
  let resolver: FuncionarioCashResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FuncionarioCashResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
