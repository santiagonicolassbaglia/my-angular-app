 

import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
 
import { AuthGuard } from './auth.guard';

describe('authGuard', () => {
  let authGuard: AuthGuard;
 
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
 
        Router,
        {
          provide: ActivatedRouteSnapshot,
          useValue: {}
        },
        {
          provide: RouterStateSnapshot,
          useValue: {}
        }
      ]
    });
    authGuard = TestBed.inject(AuthGuard);
 
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });
});
