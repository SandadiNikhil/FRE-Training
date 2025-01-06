import { Component, Output, EventEmitter } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true, 
  imports: [CardComponent, CommonModule], 
  template: `<div class="list">
               <app-card *ngFor="let item of items; let i = index"
                         [title]="item.title"
                         [description]="item.description"
                         [borderColor]="item.borderColor"
                         [button]="colorButtons[i % colorButtons.length]"
                         (borderColorChange)="updateBorderColor(item, $event)">
               </app-card>
             </div>`,
  styles: [
    `.list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }`,
    `@media (max-width: 600px) {
      .list {
        grid-template-columns: 1fr; 
      }
    }`
  ]
})
export class ListComponent {
  @Output() titleColorChange = new EventEmitter<string>();

  items: any[];
  colorButtons = [
    { label: 'Black', color: '#000000' },
    { label: 'Blue', color: '#2196f3' },
    { label: 'Green', color: '#4caf50' },
    { label: 'Red', color: '#f44336' }
  ];

  constructor(private colorService: ColorService) {
    this.items = this.colorService.getItems(); 
    this.items.forEach(item => item.borderColor = '#fff'); 
  }

  updateBorderColor(selectedItem: any, newColor: string) {
    this.items.forEach(item => {
      item.borderColor = item === selectedItem ? newColor : '#fff'; 
    });
    this.titleColorChange.emit(newColor); 
  }
}