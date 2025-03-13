function Header({ score, highscore }) {
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
        Avoid clicking on the same card. <br />
        Best score is out of 40.
      </div>
    </>
  );
}

export default Header;
