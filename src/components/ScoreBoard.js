function ScoreBoard(props) {
  return (
    <div className="score-board">
      <div className="current-score">Current Score: {props.currentScore}</div>
      <div className="high-score">High Score: {props.highScore}</div>
    </div>
  );
}

export default ScoreBoard;
