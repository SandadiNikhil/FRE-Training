import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
  @Input() color: 'red' | 'yellow' | 'green' = 'red';
  @Input() isOn: boolean = false;
}
