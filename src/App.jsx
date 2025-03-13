import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const resetGame = () => {
    setHighscore(score);
    setScore(0);
  };

  return (
    <>
      <div className="app-container">
        <Header score={score} highscore={highscore}></Header>
        <Cards resetGame={resetGame} setScore={setScore} score={score}></Cards>
      </div>
    </>
  );
}

export default App;
