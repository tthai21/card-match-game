import React from "react";
import DisplayTime from "./DisplayTime";

interface AppProps {
  timer: number;
}

const Congratulation: React.FC<AppProps> = ({ timer }) => {
  return (
    <>
      <h2>Congratulations!</h2>
      <DisplayTime
        text="You had finished the game in"
        timer={timer}
      ></DisplayTime>
    </>
  );
};

export default Congratulation;
