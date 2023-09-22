import React from "react";

interface AppProps {
  timer: number;
}

const Congratulation: React.FC<AppProps> = ({ timer }) => {
  return (
    <>
      <h2>Congratulations!</h2>
      <h2>You had finished the game in {timer} seconds!</h2>
    </>
  );
};

export default Congratulation;
