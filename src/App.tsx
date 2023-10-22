import './App.css';
import {useState} from 'react';
import Card from './card';
import CardDeck from './lib/CardDeck';

const App = () => {
  const [deck, setDeck] = useState(new CardDeck());
  const [stackOfCards, setStackOfCards] = useState([]);

  const dealCards = () => {
    const cards = deck.getCards(5);
    setStackOfCards(cards);
  };

  return (
    <div className="App">
      <div className="playingCards faceImages">
        {stackOfCards.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} suitName={card.suitName}/>
        ))}
      </div>
      <button onClick={dealCards}>Deal cards</button>
    </div>
  );
};

export default App;
