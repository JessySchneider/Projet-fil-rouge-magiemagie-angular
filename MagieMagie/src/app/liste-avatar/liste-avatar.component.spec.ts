import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAvatarComponent } from './liste-avatar.component';

describe('ListeAvatarComponent', () => {
  let component: ListeAvatarComponent;
  let fixture: ComponentFixture<ListeAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
