import { Injectable, computed, effect, signal } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly baseEmojis = ['🐵', '🐶', '🦊', '🐱', '🦁', '🐯', '🐰', '🐼'];
  private readonly cardPairs = this.shuffle([...this.baseEmojis, ...this.baseEmojis]); 

  // Signal to track the game board state
  cards = signal<Card[]>(
    this.cardPairs.map((emoji, i) => ({
      id: i,
      emoji,
      flipped: false,
      matched: false,
    }))
  );
  // Signal to track if the game is won
  gameWon = computed(() => this.cards().every(card => card.matched));

  private busy = false;

  flipCard(cardId: number) {
    if (this.busy) return;

    const current = this.cards();
    const target = current.find(c => c.id === cardId);
    if (!target || target.flipped || target.matched) return;

    this.cards.update(cards =>
      cards.map(card =>
        card.id === cardId ? { ...card, flipped: true } : card
      )
    );

    const flippedCards = this.cards().filter(c => c.flipped && !c.matched);

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (first.emoji === second.emoji) {
        this.cards.update(cards =>
          cards.map(card =>
            card.id === first.id || card.id === second.id
              ? { ...card, matched: true }
              : card
          )
        );
      } else {
        this.busy = true;
        setTimeout(() => {
          this.cards.update(cards =>
            cards.map(card =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          );
          this.busy = false;
        }, 1000);
      }
    }
  }

  private shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }
  // Reset the game state
  resetGame() {
    const shuffled = this.shuffle([...this.baseEmojis, ...this.baseEmojis]);
    this.cards.set(
      shuffled.map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false,
      }))
    );
  }
  
}
