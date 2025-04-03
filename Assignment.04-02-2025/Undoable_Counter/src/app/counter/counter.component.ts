import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryComponent } from './history/history.component';

interface HistoryEntry {
  action : string;
  undo : number;
  redo : number;
}

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, HistoryComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  count = 0;
  history: HistoryEntry[] = [];
  redoStack: HistoryEntry[] = [];
  entry: any;

  changeCount(amount: number):void {
    const undo = this.count;
    this.count += amount;

    const entry: HistoryEntry = {
      action: amount > 0 ? `+${amount}` : `${amount}`,
      undo,
      redo : this.count
  };
    this.history.push(entry);
    this.redoStack = [];

    if (this.history.length > 50) {
      this.history.shift();
    }
  }

  undo(): void {
    if (this.history.length === 0) return;  
    
      const last = this.history.pop();
      if(!last) return;

    this.count = last.undo;
    this.redoStack.push(last);
  }

  redo(): void {
    if (this.redoStack.length === 0) return;
  
    const entry = this.redoStack.pop();
    if (!entry) return;
  
    this.count = entry.redo;
    this.history.push(entry);
  }
}
