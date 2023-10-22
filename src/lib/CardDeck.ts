import Card from './Card';

class CardDeck {
  deckOfCards: Card[] = [];

  constructor() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {diams: '♦', hearts: '♥', clubs: '♣', spades: '♠'};
    const suitsKey = Object.keys(suits);

    suitsKey.forEach((suit) => {
      ranks.forEach((rank) => {
        this.deckOfCards.push(new Card(rank, suit, suits[suit]));
      });
    });
  }

  getCard(): Card {
    if (this.deckOfCards.length === 0) {
      return
    }

    const randomIndex = Math.floor(Math.random() * this.deckOfCards.length);
    return this.deckOfCards.splice(randomIndex, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const stackOfCard: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      if (card) {
        stackOfCard.push(card);
      }
    }

    return stackOfCard;
  }
}

export default CardDeck;