import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  movies: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  selectall = false;
  obj: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit() {
    for (let movie of this.movies) {
      this.obj[movie] = false;
    }
  }

  selectallHandler() {
    for (let key in this.obj) {
      this.obj[key] = this.selectall;
    }
  }
  
  clearAll() {
    this.selectall = false;
    for (let key in this.obj) {
      this.obj[key] = false;
    }
  }

  changeHandler(movie: string) {
    const checkedCount = Object.values(this.obj).filter(Boolean).length;
    this.selectall = (checkedCount === this.movies.length);
  }
}
