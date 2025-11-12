import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-delete-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './movie-delete-dialog.html',
  styleUrl: './movie-delete-dialog.css',
})
export class MovieDeleteDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {}
}