import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';  // CommonModule importieren


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      rating: 5,
      notes: 'A classic.',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      rating: 4,
      notes: 'Great read.',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      rating: 5,
      notes: 'Very thought-provoking.',
    },
  ];
}
