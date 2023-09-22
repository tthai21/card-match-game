// import { useEffect } from "react";
import { shuffleArray } from "./shuffleArray";
import { generateRandomUniqueID } from "./generateRandomUniqueID";

const Generate36RandomCards: () => CardData[] = () => {
  const cards: CardData[] = [
    { id: "1", svg: "10_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "2", svg: "10_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "3", svg: "10_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "4", svg: "10_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "5", svg: "2_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "6", svg: "2_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "7", svg: "2_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "8", svg: "2_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "9", svg: "3_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "10", svg: "3_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "11", svg: "3_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "12", svg: "3_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "13", svg: "4_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "14", svg: "4_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "15", svg: "4_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "16", svg: "4_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "17", svg: "5_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "18", svg: "5_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "19", svg: "5_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "20", svg: "5_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "21", svg: "6_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "22", svg: "6_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "23", svg: "6_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "24", svg: "6_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "25", svg: "7_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "26", svg: "7_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "27", svg: "7_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "28", svg: "7_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "29", svg: "8_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "30", svg: "8_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "31", svg: "8_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "32", svg: "8_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "33", svg: "9_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "34", svg: "9_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "35", svg: "9_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "36", svg: "9_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "37", svg: "ace_of_clubs.svg", isFaceUp: false, isMatched: false },
    { id: "38", svg: "ace_of_diamonds.svg", isFaceUp: false, isMatched: false },
    { id: "39", svg: "ace_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "40", svg: "ace_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "41", svg: "black_joker.svg", isFaceUp: false, isMatched: false },
    { id: "42", svg: "jack_of_clubs.svg", isFaceUp: false, isMatched: false },
    {
      id: "43",
      svg: "jack_of_diamonds.svg",
      isFaceUp: false,
      isMatched: false,
    },
    { id: "44", svg: "jack_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "45", svg: "jack_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "46", svg: "king_of_clubs.svg", isFaceUp: false, isMatched: false },
    {
      id: "47",
      svg: "king_of_diamonds.svg",
      isFaceUp: false,
      isMatched: false,
    },
    { id: "48", svg: "king_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "49", svg: "king_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "50", svg: "queen_of_clubs.svg", isFaceUp: false, isMatched: false },
    {
      id: "51",
      svg: "queen_of_diamonds.svg",
      isFaceUp: false,
      isMatched: false,
    },
    { id: "52", svg: "queen_of_hearts.svg", isFaceUp: false, isMatched: false },
    { id: "53", svg: "queen_of_spades.svg", isFaceUp: false, isMatched: false },
    { id: "54", svg: "red_joker.svg", isFaceUp: false, isMatched: false },
  ];

  const randomCardArray: CardData[] = shuffleArray(cards);
  const first18Cards: CardData[] = randomCardArray.slice(0, 6);
  // Create a duplicate cards array with unique id
  const existingIDs = new Set(first18Cards.map((item) => item.id));
  const duplicatedCards = first18Cards.map((item) => ({
    ...item,
    id: generateRandomUniqueID(existingIDs),
  }));
  const duplicated36Cards: CardData[] = first18Cards.concat(duplicatedCards);
  const newCards: CardData[] = shuffleArray(duplicated36Cards);
  return newCards;
};

export default Generate36RandomCards;
