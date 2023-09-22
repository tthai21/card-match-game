import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import Generate36RandomCards from "../Helper/Generate36RandomCards";
import Button from "../Helper/Button";
import Congratulation from "../Helper/Congratulation";
import DisplayTime from "../Helper/DisplayTime";

const Board: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [openCards, setOpenCards] = useState<CardData[]>([]);
  const [timer, setTimer] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const firstClickedCardRef = useRef<CardData | null>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const clickedHistoryRef = useRef<string[]>([]);
  const initialCards: CardData[] = Generate36RandomCards();

  useEffect(() => {
    setCards(initialCards);
    setOpenCards([]);
    setTimer(0);
    setGameOver(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCardClick = (clickedCard: CardData) => {
    if (
      openCards.length < 2 &&
      !clickedCard.isMatched &&
      !clickedCard.isFaceUp
    ) {
      // Allow clicking on a maximum of 2 cards and only if they are not matched or already face up
      const updatedCards = cards.map((card) =>
        card.id === clickedCard.id ? { ...card, isFaceUp: true } : card
      );
      setCards(updatedCards);
      setOpenCards([...openCards, clickedCard]);

      if (openCards.length === 0) {
        // First card has been clicked
        if (timerIntervalRef.current === null) {
          startTimer();
        }
        firstClickedCardRef.current = clickedCard;
      }
      if (openCards.length === 1) {
        // Two cards are face up, check for a match
        if (firstClickedCardRef.current!.svg === clickedCard.svg) {
          // Matching cards
          const updatedCards = cards.map((card) =>
            card.svg === clickedCard.svg || card.svg === openCards[0].svg
              ? { ...card, isMatched: true, isFaceUp: true }
              : card
          );
          setCards(updatedCards);
          setOpenCards([]);
          firstClickedCardRef.current = null;
          // Check if all cards are matched
          const allMatched = updatedCards.every((card) => card.isMatched);
          if (allMatched) {
            setGameOver(true);
            stopTimer();
          }
        } else {
          // Not matching cards
          setTimeout(() => {
            // Check if the card has been clicked before without a match
            if (
              clickedHistoryRef.current.includes(openCards[0].svg) ||
              openCards[1]
            ) {
              // Penalty for clicking on a card that was previously clicked but not matched
              setTimer((prevTimer) => prevTimer + 5);
            } else {
              // Add the cards to the clicked history
              openCards.forEach((openCard) => {
                clickedHistoryRef.current.push(openCard.svg);
              });
            }
            const updatedCards = cards.map((card) =>
              card.svg === clickedCard.svg || card.svg === openCards[0].svg
                ? { ...card, isFaceUp: false }
                : card
            );
            setCards(updatedCards);
            setOpenCards([]);
            firstClickedCardRef.current = null;
          }, 1000);
        }
      }
    }
  };

  const resetGame = () => {
    const initialCards = Generate36RandomCards();
    setCards(initialCards);
    setTimer(0);
    stopTimer();
    setOpenCards([]);
    setGameOver(false);
    firstClickedCardRef.current = null;
  };

  const startTimer = () => {
    timerIntervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIntervalRef.current !== null) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  return (
    <>
      {gameOver ? (
        <div className="congratulations text-center mt-10 text-2xl text-white">
          <Congratulation timer={timer}></Congratulation>
          <Button onClick={resetGame}></Button>
        </div>
      ) : (
        <div className="w-[40%] mx-auto mt-5 text-white text-3xl font-bold  ">
          <DisplayTime text="Timer" timer={timer}></DisplayTime>
          <div className="grid grid-cols-6 gap-x-3 mx-auto ">
            {cards.map((card, index) => (
              <Card key={index} card={card} onClick={() => onCardClick(card)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
