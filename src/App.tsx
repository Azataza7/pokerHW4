import './App.css';
import {useState} from 'react';
import CardDeck from './lib/CardDeck';

const App = () => {
  const [deck, setDeck] = useState(new CardDeck());

  console.log(deck);
  return (
    <div className="App">
      <div className="playingCards faceImages">
      </div>
    </div>
  );
};

export default App;
