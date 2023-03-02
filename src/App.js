import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/helment-1.png"},
  { "src": "/img/potion-1.png"},
  { "src": "/img/ring-1.png"},
  { "src": "/img/scroll-1.png"},
  { "src": "/img/sheild-1.png"},
  { "src": "/img/sword-1.png"}
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [ ...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random()}));

      setCards(shuffledCards);
      setTurns(0);
  }

  shuffleCards();

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick = {shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
