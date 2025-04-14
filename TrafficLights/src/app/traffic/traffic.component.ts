import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightComponent } from '../light/light.component';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule, LightComponent],
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
})
export class TrafficLightComponent {
  currentLight = signal<'red' | 'yellow' | 'green' | null>(null);

  constructor() {
    this.startCycle();
  }

  private startCycle() {
    const cycle = async () => {
      while (true) {
        this.currentLight.set('red');
        await this.delay(4000);

        this.currentLight.set(null);
        await this.delay(500);

        this.currentLight.set('green');
        await this.delay(4000);

        this.currentLight.set(null);
        await this.delay(500);

        this.currentLight.set('yellow');
        await this.delay(2000);

        this.currentLight.set(null);
        await this.delay(500);
      }
    };

    cycle();
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  isOn = (color: 'red' | 'yellow' | 'green') =>
    computed(() => this.currentLight() === color);
}
