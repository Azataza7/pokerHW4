import './App.css';
import Card from './card';

const App = () => {
  const rankList = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suitList = {
    diams: '♦', hearts: '♥',
    clubs: '♣', spades: '♠',
  };
  const suitKeys = Object.keys(suitList);
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <Card rank={rankList[12]} suit={suitList.clubs} suitName={suitKeys[2]}/>
        <Card rank={rankList[11]} suit={suitList.diams} suitName={suitKeys[0]}/>
        <Card rank={rankList[10]} suit={suitList.hearts} suitName={suitKeys[1]}/>
        <Card rank={rankList[9]} suit={suitList.clubs} suitName={suitKeys[2]}/>
        <Card rank={rankList[8]} suit={suitList.spades} suitName={suitKeys[3]}/>
      </div>
    </div>
  );
};

export default App;
