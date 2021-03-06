/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */

export function getLatterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord);
  const guessedLetterSet = new Set(guessedWord);
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
