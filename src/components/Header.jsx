function Header({ gameOver, resetGame, score, highscore }) {
  return (
    <>
      <div className="header">
        <a href="https://github.com/luciavu/memory-card" target="_blank">
          Code
        </a>
        <div className="score">
          <div className="label">SCORE</div>
          <div className="value">{score}</div>
        </div>
        <div className="highscore">
          <div className="label">BEST</div>
          <div className="value">{highscore}</div>
        </div>
      </div>

      <div className="description">
        {gameOver ? (
          <>
            {'You win!'}
            <br />
            <button onClick={resetGame}>Play again?</button>
          </>
        ) : (
          <>
            {'Avoid clicking on the same card.'}
            <br />
            {'Reach 30 points to win.'}
          </>
        )}
      </div>
    </>
  );
}

export default Header;
