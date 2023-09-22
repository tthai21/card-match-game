export function generateRandomUniqueID(existingIDs: Set<string>): string {
  let randomID: string;
  do {
    randomID = Math.floor(Math.random() * 100000).toString(); // Adjust the range as needed
  } while (existingIDs.has(randomID));
  return randomID;
}
