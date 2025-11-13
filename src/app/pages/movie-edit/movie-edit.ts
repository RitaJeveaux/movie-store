import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MovieService } from '../../services/movie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { defer, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-movie-edit',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelect, MatOption, ReactiveFormsModule],
  templateUrl: './movie-edit.html',
  styleUrl: './movie-edit.css',
})
export class MovieEdit implements OnInit {
  formGroup: FormGroup;
  platforms: Array<string> = [
    "In Theaters",
    "Streaming",
    "On Demand",
    "Comming Soon",
  ];
  genres: Array<string> = [
    "Action",
    "Drama",
    "Science Fiction",
    "Thriller",
    "Romance",
    "Horror",
  ];
  imagePreview?: string | null;
  fileError?: string | null;
  file: File | undefined;
  movieId: string | null = null;
  private movie?: Movie;

  constructor(
    private moviesService: MovieService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.formGroup = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.maxLength(50)]),
      genre: new FormControl("", [Validators.required]),
      platform: new FormControl("", [Validators.required]),
      imageLink: new FormControl(),
      price: new FormControl<number | null>(null, [Validators.min(0.01)]),
      description: new FormControl(),
      availableInStock: new FormControl<number | null>(null, [Validators.min(1)]),
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.moviesService.getOne(this.movieId).subscribe(movie => {
          this.movie = movie;
          this.formGroup.patchValue(movie);
          this.imagePreview = movie.imageLink;
        });
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.file = input.files?.[0];

    if (!this.file) {
      this.imagePreview = null;
      return;
    }

    if (!this.file.type.startsWith('image/')) {
      this.fileError = 'Por favor, selecione um arquivo do tipo imagem';
      this.imagePreview = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => this.imagePreview = reader.result as string;
    reader.readAsDataURL(this.file);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      defer(() => {
        if (this.file) {
          return this.moviesService.uploadImage(this.file);
        }
        return of({ imageUrl: this.movie?.imageLink });
      }).pipe(
        switchMap(({ imageUrl }) => {
          const movie: Movie = {
            ...this.movie!,
            ...this.formGroup.value,
            imageLink: imageUrl,
          };
          console.log('Objeto enviado para updateOne:', movie);
          return this.moviesService.updateOne(this.movieId!, movie);
        })
      ).subscribe(this.getSubscriptionObserver());
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  private getSubscriptionObserver() {
    return {
      next: (movie: Movie) => {
        this.matSnackBar.open(`O filme '${movie.title}' foi atualizado com sucesso!`, 'Fechar', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000
        });
        this.router.navigate(['']);
      },
      error: () => {
        this.matSnackBar.open('Não foi possível atualizar o filme.', 'Fechar', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000
        });
      }
    };
  }
}