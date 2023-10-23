import Card from './Card';

class PokerHand {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  private isFlush() {
    const firstSuit = this.cards[0].suit;
    return this.cards.every(card => card.suit === firstSuit);
  }

  private hasThreeOfKind() {
    const rankCount: { [rank: string]: number } = {};
    for (const card of this.cards) {
      const rank = card.rank;
      rankCount[rank] = (rankCount[rank] || 0) + 1;
      if (rankCount[rank] === 3) {
        return true;
      }
    }
    return false;
  }

  private hasTwoPairs() {
    const rankCount: { [rank: string]: number } = {};
    for (const card of this.cards) {
      const rank = card.rank;
      rankCount[rank] = (rankCount[rank] || 0) + 1;
    }
    let pairs = 0;
    for (const rank in rankCount) {
      if (rankCount[rank] === 2) {
        pairs++;
      }
    }
    return pairs === 2;
  }

  private hasOnePair() {
    const rankCount: { [rank: string]: number } = {};
    for (const card of this.cards) {
      const rank = card.rank;
      rankCount[rank] = (rankCount[rank] || 0) + 1;
      if (rankCount[rank] === 2) {
        return true;
      }
    }
    return false;
  }

  private highCard() {
    return (
      !this.isFlush() &&
      !this.hasThreeOfKind() &&
      !this.hasTwoPairs() &&
      !this.hasOnePair()
    );
  }

  getOutCome() {
    if (this.isFlush()) {
      return 'Flush';
    }

    if (this.hasThreeOfKind()) {
      return 'Three of a Kind';
    }

    if (this.hasTwoPairs()) {
      return 'Two Pairs';
    }

    if (this.hasOnePair()) {
      return 'One Pair';
    }

    if (this.highCard()) {
      return 'High card';
    }
  }
}

export default PokerHand;
