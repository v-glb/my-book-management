import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book.model';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book-form',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule],
  templateUrl: './edit-book-form.component.html',
  styleUrl: './edit-book-form.component.css'
})
export class EditBookFormComponent {
  @Input() book!: Book;

  @Output() bookUpdated = new EventEmitter<Book>();

  onSubmit() {
    this.bookUpdated.emit(this.book);
  }
}
