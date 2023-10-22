class Card {
  rank: string;
  suit:string;
  suitName: string;

  constructor(rank:string, suitName:string, suit:string) {
    this.rank = rank;
    this.suit = suit
    this.suitName = suitName
  }
}

export default Card;