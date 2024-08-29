import { TestBed } from '@angular/core/testing';

import { MathsService } from './maths.service';

describe('MathsService', () => {
  let service: MathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //addition
  it('should add two numbers',()=>{
    const result=service.add(3,4);
    expect(result).toBe(7);
  });
  //Subtract
  it('should subtract two numbers',()=>{
    const result=service.subtract(10,5);
    expect(result).toBe(5);
  });
  //divide and //multiply
  it('should match string using toMatch',()=>{
    const str='Hello World';
    expect(str).toMatch('World');
  })
  it('should check truthness of statement', () => {
    expect(service.add(10,20)).toBeTruthy();
  });




});
