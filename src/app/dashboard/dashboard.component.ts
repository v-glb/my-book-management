import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { EditBookFormComponent } from '../edit-book-form/edit-book-form.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    AddBookFormComponent,
    EditBookFormComponent,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
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

  displayDialog: boolean = false;
  displayEditDialog: boolean = false;
  selectedBook!: Book;

  constructor (private confirmationService: ConfirmationService) {}

  showAddBookDialog() {
    this.displayDialog = true;
  }

  hideAddBookDialog() {
    this.displayDialog = false;
  }

  showEditBookDialog(book: Book) {
    this.selectedBook = book;
    this.displayEditDialog = true;
  }

  hideEditBookDialog() {
    this.displayEditDialog = false;
  }

  onBookUpdated(updatedBook: Book) {
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) { // if book is found
      this.books[index] = updatedBook;
    }
  }

  onBookAdded(newBook: any) {
    this.books.push(newBook);
  }

  deleteBook(bookId: number) {
    this.books = this.books.filter((b) => b.id !== bookId);
  }

  confirmDelete(book: Book) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete this book: ${book.title} by ${book.author}?`,
      accept: () => {
        this.deleteBook(book.id);
      },
    });
  }
}
