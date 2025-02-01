import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusicComponent } from './view-music.component';

describe('ViewMusicComponent', () => {
  let component: ViewMusicComponent;
  let fixture: ComponentFixture<ViewMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
