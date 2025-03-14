import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setGameOver(false);
    if (score > highscore) {
      setHighscore(score);
    }
    setScore(0);
  };

  return (
    <>
      <div className="app-container">
        <Header
          gameOver={gameOver}
          resetGame={resetGame}
          score={score}
          highscore={highscore}
        ></Header>
        <Cards
          gameOver={gameOver}
          setGameOver={setGameOver}
          resetGame={resetGame}
          setScore={setScore}
          score={score}
        ></Cards>
      </div>
    </>
  );
}

export default App;
