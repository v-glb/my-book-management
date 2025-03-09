import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { EditBookFormComponent } from '../edit-book-form/edit-book-form.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BookService } from '../services/book.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


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
    ConfirmDialogModule,
    HttpClientModule,
  ],
  providers: [ConfirmationService, BookService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  displayDialog: boolean = false;
  displayEditDialog: boolean = false;
  selectedBook!: Book;

  constructor (private confirmationService: ConfirmationService, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

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
