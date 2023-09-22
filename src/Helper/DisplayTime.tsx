import React from "react";

interface DisplayTimeProps {
  timer: number;
  text: string;
}

const DisplayTime: React.FC<DisplayTimeProps> = ({ text, timer }) => {
  const minute: number = Math.floor(timer / 60);
  const second: string = (timer % 60).toString().padStart(2, "0");
  return (
    <>
      <h2 className="text-center pb-5">
        {text} {minute}:{second}
      </h2>
    </>
  );
};

export default DisplayTime;
