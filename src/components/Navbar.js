import ScoreBoard from "./ScoreBoard";

function Navbar(props) {
  return (
    <div className="navbar">
      Memory Card{" "}
      <ScoreBoard
        currentScore={props.currentScore}
        highScore={props.highScore}
      />
    </div>
  );
}

export default Navbar;
