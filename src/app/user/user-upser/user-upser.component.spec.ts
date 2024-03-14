import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpserComponent } from './user-upser.component';

describe('UserUpserComponent', () => {
  let component: UserUpserComponent;
  let fixture: ComponentFixture<UserUpserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserUpserComponent]
    });
    fixture = TestBed.createComponent(UserUpserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
