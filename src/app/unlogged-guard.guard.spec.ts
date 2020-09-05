import { TestBed } from '@angular/core/testing';

import { UnloggedGuardGuard } from './unlogged-guard.guard';

describe('UnloggedGuardGuard', () => {
  let guard: UnloggedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnloggedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
