import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,

  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [CommonModule, FormsModule]
})

// export class SearchComponent {
//   bookName = '';

//   @Output() searchTerm = new EventEmitter<string>();

//   keyword: string = '';

//   onSearch(): void {
//     this.searchTerm.emit(this.keyword);
//   }
//   constructor(private bookService: BookService) {}

//   consoleInput() {
//     this.bookService.getBooks(this.bookName).subscribe((val) => {
//     });
//     console.log(this.bookName);
//   }
//}

export class SearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  keyword: string = '';

  onSearch() {
    console.log('Emitting keyword:', this.keyword); 
    this.searchTerm.emit(this.keyword);
  }
}
