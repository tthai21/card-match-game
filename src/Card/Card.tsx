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
      className={`card ${
        card.isFaceUp ? "face-up w-20 my-3 " : "face-down w-20 my-3"
      }`}
      onClick={handleClick}
    >
      {card.isFaceUp ? (
        <img src={card.svg} alt={`Card ${card.id}`} />
      ) : (
        <img src="back.png" alt="back.png" />
      )}
    </div>
  );
};

export default Card;
