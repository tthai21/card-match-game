import React from "react";

interface CardProps {
  card: CardData;
  onClick: (card: CardData) => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  const handleClick = () => {
    if (!card.isFaceUp) {
      onClick(card);
    }
  };

  return (
    <div
      className={`card cursor-pointer mx-auto flex justify-center my-2  text-center ${
        card.isFaceUp ? "face-up    " : "face-down   "
      }`}
      onClick={handleClick}
    >
      {card.isFaceUp ? (
        <img
          className="w-24 h-32 object-fill"
          src={card.svg}
          alt={`Card ${card.svg}`}
        />
      ) : (
        <img
          className="w-24 h-32 object-fill px-1 rounded-lg"
          src="back.png"
          alt="back.png"
        />
      )}
    </div>
  );
};

export default Card;
