import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true, 
  imports: [CommonModule], 
  template: `<div class="card" [ngStyle]="{'border': '5px solid ' + borderColor}">
               <h3 [ngStyle]="{'color': borderColor|| '#000'}">{{ title }}</h3>
               <p>{{ description }}</p>
               <button (click)="changeBorderColor(button.color)">
                 {{ button.label }}
               </button>
             </div>`,
  styles: [
    `.card {
      padding: 1rem;
      margin: 1rem;
      border-radius: 8px;
      color: #000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      background-color: #fff;
    }`,
    `button {
      margin-top: 10px;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }`
  ]
})
export class CardComponent {
  @Input() title: string = ''; 
  @Input() description: string = ''; 
  @Input() borderColor: string = '#000'; 
  @Input() button: { label: string; color: string } = { label: '', color: '' }; 

  @Output() borderColorChange = new EventEmitter<string>();

  changeBorderColor(newColor: string) {
    this.borderColorChange.emit(newColor);
  }
}