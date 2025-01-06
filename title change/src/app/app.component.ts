import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
  imports: [CommonModule, ListComponent] 
})
export class AppComponent {
  title = 'Card Color Application';
  titleColor = '#000'; 

  updateTitleColor(newColor: string) {
    this.titleColor = newColor; 
  }
}