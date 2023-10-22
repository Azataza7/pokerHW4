import Card from './Card';

class CardDeck {
  deckOfCards: Card[] = [];

  constructor() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {diams: '♦', hearts: '♥', clubs: '♣', spades: '♠'};
    const suitsKey = Object.keys(suits);

    suitsKey.forEach((suit) => {
      ranks.forEach((rank) => {
        this.deckOfCards.push(new Card(rank, suit));
      });
    });
  }


}


export default CardDeck;