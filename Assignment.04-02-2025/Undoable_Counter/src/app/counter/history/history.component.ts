import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface HistoryEntry {
  action: string;
  undo: number;
  redo: number;
}

@Component({
  standalone: true,
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  @Input() entries: HistoryEntry[] = [];
}
