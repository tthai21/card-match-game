import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <button
        className="bg-blue-600 text-white text-center border rounded-lg px-4 py-2"
        onClick={onClick}
      >
        Play Again
      </button>
    </>
  );
};

export default Button;
