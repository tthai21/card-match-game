export {};
declare global {
  interface CardData {
    id: string;
    svg: string;
    isFaceUp: boolean;
    isMatched: boolean;
  }
}
