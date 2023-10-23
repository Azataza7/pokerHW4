import './App.css';
import {useState} from 'react';
import Card from './card';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';

const App = () => {
  const [deck] = useState(new CardDeck());
  const [stackOfCards, setStackOfCards] = useState([]);
  const [pokerHandOutCome, setPokerHandOutCome] = useState('');


  const dealCards = () => {
    const cards = deck.getCards(5);
    const pokerHand = new PokerHand(cards);
    try {
      const outCome = pokerHand.getOutCome();
      setStackOfCards(cards);
      setPokerHandOutCome(outCome);
    } catch (error) {
      console.log('error' + error);
    }

  };

  return (
    <div className="App">
      <div className="playingCards faceImages">
        {stackOfCards.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} suitName={card.suitName}/>
        ))}
        <div className="outCome">
          <p>{pokerHandOutCome}</p>
        </div>
      </div>
      <button onClick={dealCards}>Deal cards</button>
    </div>
  );
};

export default App;
