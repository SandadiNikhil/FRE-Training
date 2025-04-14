import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { Card } from './models/card.model';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cards!: Signal<Card[]>;
  gameWon!: Signal<boolean>;


  constructor(private gameService: GameService) {
    this.cards = this.gameService.cards;
    this.gameWon = this.gameService.gameWon;
  }

  onCardClick(cardId: number) {
    this.gameService.flipCard(cardId);
  }

  playAgain() {
    this.gameService.resetGame();
  }
}
