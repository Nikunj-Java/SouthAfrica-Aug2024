import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherAppComponent } from './wheather-app.component';

describe('WheatherAppComponent', () => {
  let component: WheatherAppComponent;
  let fixture: ComponentFixture<WheatherAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatherAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheatherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
