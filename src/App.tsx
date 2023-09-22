import Board from "./Board/Board";

function App() {
  return (
    <div className="bg-cover bg-no-repeat bg-center h-screen bg-game-board ">
      <h1 className="text-6xl font-bold text-white text bg-center  text-center pt-10">
        Matching Card Game
      </h1>
      <Board></Board>
    </div>
  );
}

export default App;
