import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent {
  @Input() albums: any[] = [];
}
