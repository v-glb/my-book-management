import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [FormsModule, ButtonModule, CommonModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.css'
})
export class AddBookFormComponent {
  @Output() bookAdded = new EventEmitter<Book>();

  book: Book = {
    id: 0,
    title: '',
    author: '',
    rating: 0,
    notes: '',
  };

  onSubmit() {
    this.bookAdded.emit({ ...this.book, id: Date.now() });
    this.book = { id: 0, title: '', author: '', rating: 0, notes: '' }; // Reset form
  }
}
