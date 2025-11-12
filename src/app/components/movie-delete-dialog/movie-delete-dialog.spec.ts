import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeleteDialog } from './movie-delete-dialog';

describe('MovieDeleteDialog', () => {
  let component: MovieDeleteDialog;
  let fixture: ComponentFixture<MovieDeleteDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDeleteDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDeleteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
